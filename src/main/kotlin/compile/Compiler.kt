package compile

import automaton.Automaton
import automaton.AutomatonBuildException
import automaton.DFABuilder



class Compiler(private var source: String) {

    private val outputCharacters = listOf("L", "N", "W", "S", "E")

    private val lineMap: MutableMap<String, Int> = HashMap<String, Int>()

    public var log: String = ""

    public var errorNumber = 0

    private val inputCharacters = listOf(
        "N", "E", "S", "W",
        "ES", "ESW", "EW",
        "NE", "NES", "NESW",
        "NEW", "NS", "NSW",
        "NW", "WS"
    )

    private var lineNumber = 1;

    private val builder = DFABuilder()

    public fun compile(): Automaton? {
        val lines = source.split("\n")

        for (i in lines.indices) {
            lineNumber = i+1

            val it = lines[i]

            if(it.contains("name")){
                builder.name(it.split(":")[1].trim())
                continue
            }

            if(it.contains("color")){
                builder.color(it.split(":")[1].trim())
                continue
            }

            val splitLine: List<String> = it.split("->")

            if (it.matches("\\s*".toRegex()) || it.isEmpty()) continue

            if (splitLine.size != 2) {
                errorNumber++
                log += "line $lineNumber: Error: wrong line format"
                continue
            }

            val firstPartOfLine = eraseBrackets(splitLine[0])
            val firstPartList = firstPartOfLine.split(",")

            val forStates = firstPartList.slice(0..firstPartList.size - 2)
            var input = firstPartList.last().trim()

            val secondPartOfLine = splitLine[1].split(",")
            val nextState = secondPartOfLine[0].trim()
            val output = secondPartOfLine[1].trim()

            validateInput(input)
            validateOutput(output)
            validateInputOutputContract(input, output)

            input = prepareInput(input)

            for (s in forStates) {
                if(lineMap.containsKey("$s%$input")){
                    errorNumber++
                    log += "line: $lineNumber. Error: such line already specified (${lineMap.get("$s%$input")?.plus(1)})"
                }else{
                    lineMap["$s%$input"] = i
                }
                if(errorNumber==0)
                    builder.row(s.trim(), input, nextState, output)
            }

        }

        if(errorNumber == 0)
            return builder.build()
        else return null

    }


    private fun validateInput(input: String) {
        if (input.trim().isEmpty()) log += "line: ${lineNumber}. Error: input is empty\n"
    }

    private fun validateOutput(output: String) {
        if (output.trim().length != 1) {
            log += "line: ${lineNumber}. Error: output's length is not 1\n"
            errorNumber++
        }
        if (!outputCharacters.contains(output.trim())){
            log += "line: ${lineNumber}. Error: wrong output symbol\n"
            errorNumber++

        }
    }

    private fun validateInputOutputContract(input: String, output: String) {
        if (output.trim() != "L" && !input.trim().contains(output.trim())) log += "line: ${lineNumber}. Error: input($input) is not a part of output($output)\n"
    }

    private fun equals(cpr1: String, cpr2: String): Boolean {
        if (cpr1.length != cpr2.length) return false

        val charList1 = cpr1.split("")
        val charList2 = cpr2.split("")

        for (s in charList1) {
            if (!cpr2.contains(s.trim())) return false
        }

        for (s in charList2) {
            if (!cpr1.contains(s.trim())) return false
        }

        return true
    }

    private fun prepareInput(input: String): String {

        var res: String = ""

        inputCharacters.forEach {
            if (equals(input, it)) {
                res = it
            }
        }

        if (res == ""){
            errorNumber++
            log+="line: ${lineNumber}. Error: wrong input\n"
        }

        return res
    }

    private fun cleanSource(source: String): String{
        var result = source.replace("<[^<>]*>".toRegex(), "")
        result = result.replace("→", "->")
        return result
    }

    fun getCompiled(): Automaton{
        return builder.build()
    }

    private fun eraseBrackets(line: String) = line.replace("{", "").replace("}", "")
}
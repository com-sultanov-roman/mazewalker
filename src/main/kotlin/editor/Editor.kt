package editor


import automaton.AutomatonRepository
import compile.Compiler
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.Element
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import org.w3c.files.BlobPropertyBag
import org.w3c.files.FileReader
import scene.tools.OutputTool

class Editor(private val code: Element, private val lines: Element) {

    private var buildBtn: Element? = null
    private var saveCodeBtn: Element? = null
    private var loadCodeBtn: Element? = null
    private var plusBtn: Element? = null

    var text: String = ""

    private val automatonRepository = AutomatonRepository.getInstance()

    private val keyDownHandler: dynamic = { event: KeyboardEvent ->
        if (event.key == "Enter") {
            console.log(obtainSource())
            //pretty()
        }

        if (event.key == "Shift") {
            text = code.asDynamic().value
            val compiler = Compiler(text)
            console.log(compiler.compile())


//            console.log(code.asDynamic().value)
//            console.log(code.asDynamic().value.toString().split("\n").size)
            // pretty()
        }
    }

    private val build: dynamic = { event: MouseEvent ->
        val compiler: Compiler = Compiler(obtainSource())
        val automaton = compiler.compile()
        if (compiler.errorNumber == 0) {
            OutputTool.getInstance().addString("Build success.")
            //window.alert("Build success")
        }
        else {
            OutputTool.getInstance().addString("Build error:\n")
            OutputTool.getInstance().addString(compiler.log)
        }


        if (automaton != null) {
            automatonRepository.automatonMap[automaton.getName()] = automaton
        }

        val output = document.getElementById("output")
        val cleaned = "<pre class=\"output\">${cleanSource(obtainSource())}</pre>"
    }

    private val addCode: dynamic = { event: MouseEvent ->
        code.asDynamic().value = ""
    }

    private val saveCode: dynamic = { event: MouseEvent ->
        val blob = Blob(arrayOf(obtainSource()), BlobPropertyBag(type = "text/plain"))
        val link = document.createElement("a")
        link.setAttribute("href", URL.Companion.createObjectURL(blob))
        link.setAttribute("download", "automaton.txt")
        link.asDynamic().click()
    }

    private fun loadDFA(txt: String) {
        code.asDynamic().value = txt
        OutputTool.getInstance().addString("DFA program loaded successfully.")
    }

    private fun getDFAFile() {
        val file = loadCodeBtn.asDynamic().files[0]
        val fileReader = FileReader()
        fileReader.readAsText(file)
        fileReader.onload = {
            loadDFA(fileReader.result as String)
        }
    }

    init {
        buildBtn = document.getElementById("build")
        saveCodeBtn = document.getElementById("save_code")
        loadCodeBtn = document.getElementById("input__dfa")
        plusBtn = document.getElementById("add_automaton")

        buildBtn.asDynamic().addEventListener("click", build)
        saveCodeBtn.asDynamic().addEventListener("click", saveCode)
        loadCodeBtn.asDynamic().addEventListener("change") {
            getDFAFile()
        }
        plusBtn.asDynamic().addEventListener("click", addCode)

        fillNumbers()
    }

    private fun fillNumbers() {
        val length = 24

        val str = StringBuilder()
        for (i in 1..length)
            str.append(i).append("\n")
        lines.innerHTML = str.toString()
    }

    private fun obtainSource(): String {
        return code.asDynamic().value.toString()
    }

    private fun cleanSource(source: String): String {
        var result = source.replace("<[^<>]*>".toRegex(), "")
        result = result.replace("→", "->")
        return result
    }


}


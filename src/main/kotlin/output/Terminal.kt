package output

import automaton.AutomatonContext
import automaton.AutomatonRepository
import kotlinx.browser.document
import maze.core.ChessMaze


import maze.generators.ChessMazeEditor
import org.w3c.dom.Element
import org.w3c.dom.events.KeyboardEvent
import scene.SceneController

class Terminal(private var maze: ChessMaze, private var sceneController: SceneController) {

    var content = ""

    fun updateContent() {
        content = terminalTextArea.asDynamic().value as String
    }

    private val terminalTextArea: Element? = document.getElementById("preview_output_content")

    init {
        terminalTextArea.asDynamic().addEventListener("keydown") { keyboardEvent: KeyboardEvent ->
            if (keyboardEvent.key.equals("Enter")) {
                execute()
            }
        }
        terminalTextArea.asDynamic().value = ""
    }



    // add border l start: int end: int a: double b: int fill: string
    // add border v start:int end:int a:int fill:string
    // add border c function:String start:int end:int offsetX: int offsetY:int fill:string

    // set dfa name: String x: Int y:Int color: String
    fun execute() {
        updateContent()
        val command = content.split("\n").filter { !it.matches("\\s*".toRegex()) }.last()
        if (command.contains("add border")) {
            addBorderHandler(command)
            return
        }
        if(command.trim().equals("dfa list")){
            val list = AutomatonRepository.getInstance().automatonMap.values.toList()

            val stringBuilder = StringBuilder()
            if(list.isEmpty()){
                terminalTextArea.asDynamic().value = "$content\nno automatons\n"
                return
            }
            for(i in list.indices){
                stringBuilder.append(list[i].getName())
                if(i != list.size - 1) stringBuilder.append(", ")
            }
            //stringBuilder.append("\n")
            terminalTextArea.asDynamic().value = content + "\n" + stringBuilder.toString()
            return
        }
        if(command.contains("set dfa")){
            setDfaHandler(command.trim())
        }

        //val mazeMatrix = ChessMazeManager.ConvertToMatrix(maze as ChessMaze)
    }

    private fun setDfaHandler(command: String){
        val command_ = command.replace("set dfa", "").trim()

        val args = command_.split("\\s+".toRegex())

        val fargs = args.filter {
            it.matches("\\s*")
        }

        if(fargs.size != 4){
            println("syntax error")
        }

        println(fargs.size)

        val name = fargs[0]
        val x = fargs[1].toInt()
        val y = fargs[2].toInt()
        val color = fargs[3]

        val automaton = AutomatonRepository.getInstance().automatonMap[name]
        if(automaton != null){
            val automatonContext = AutomatonContext(automaton)
            automatonContext.color = color
            automatonContext.setXY(x to y)
            sceneController.scene.getAutomatonContextManager().addContext(automatonContext, name)
            sceneController.draw()
            terminalTextArea.asDynamic().value = "$content\nset successful"
        }else{
            terminalTextArea.asDynamic().value = "$content\nno automaton with name $name"
        }
    }

    private fun addBorderHandler(command: String) {
        var command_ = command.replace("add border", "").trim()

        val operName = command_[0]
        if (operName !in listOf<Char>('l', 'v', 'c')) throw Exception("illegal command")

        command_ = command_.replace(operName.toString(), "").trim()

        val args = command_.split("\\s+".toRegex())
        val fargs = args.filter {
            it.matches("\\s*")
        }

        when (operName) {
            'l' -> {
                if (fargs.size != 5) throw Exception("wrong syntax 1")
                val start = fargs[0].toInt()
                val end = fargs[1].toInt()
                val a = fargs[2].toDouble()
                val b = fargs[3].toInt()
                val fill = fargs[4]

                //ChessMazeEditor(maze).removeLastBorder()
                ChessMazeEditor(maze).generateLinearBorder(start to end, a, b, fill)


            }
            'v' -> {
                if (fargs.size != 4) throw Exception("wrong syntax 2")
                val start = fargs[0].toInt()
                val end = fargs[1].toInt()
                val a = fargs[2].toInt()
                val fill = fargs[3]
                ChessMazeEditor(maze).generateVerticalBorder(start to end, a, fill)
            }
            'c' -> {
                if (fargs.size != 6) throw Exception("wrong syntax 3")
                val function = fargs[0]
                val start = fargs[1].toInt()
                val end = fargs[2].toInt()
                val offsetX = fargs[3].toInt()
                val offsetY = fargs[4].toInt()
                val fill = fargs[5]
                ChessMazeEditor(maze).generateBorderFromFunction(
                    function, start to end,
                    offsetX to offsetY, fill
                )
            }
        }
        sceneController.draw()
    }

    fun setMaze(maze: ChessMaze){
        this.maze = maze
    }

}
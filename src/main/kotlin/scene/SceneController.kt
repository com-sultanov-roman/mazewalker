package scene

import automaton.AutomatonRepository
import kotlinx.browser.document
import kotlinx.browser.window
import maze.core.ChessMaze
import maze.generators.ChessMazeGenerator
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import org.w3c.dom.events.WheelEvent
import output.Terminal
import scene.tools.ToolController
import scene.ui.SceneRender


class SceneController(canvas: dynamic) {

    companion object {
        private var sceneController: SceneController? = null
        fun getInstance(): SceneController = sceneController ?: throw NullPointerException("sceneController has not been initialized")
    }

    private val width = canvas.getAttribute("width").toString().toInt()
    private val height = canvas.getAttribute("height").toString().toInt()

    private val automatonRepository: AutomatonRepository = AutomatonRepository.getInstance()

    var h: Int = 14
        set(value) {
            if (value in 8..112) {
                field = value
                render.h = value
            }
        }

    private val hint: HTMLDivElement = document.getElementById("hint") as HTMLDivElement

    var offset: Pair<Int, Int> = (width / (3 * h)) to height / (3 * h)

    var scene: Scene = Scene(ChessMazeGenerator.generateUsingFunction("(x)^2/15", 0 to 10, "u"))
        set(value) {
            field = value
            terminal.setMaze(value.getMaze())
            render.scene = value
        }

    private val terminal = Terminal(scene.getMaze(), this)
    private val render: SceneRender = SceneRender(scene, canvas.getContext("2d"))

    val cycle: dynamic = {

        val automatonContextCollection = scene.getAutomatonContextManager().getContextMap().values

        var x = 0
        var y = 0
        var input = ""

        var isNotL = false

        for (context in automatonContextCollection) {
            x = context.getX()
            y = context.getY()
            input = scene.getMaze().getValidDirection(x, y)
            if(context.next(input) != "L") isNotL = true

        }

        if(!isNotL) ToolController.getInstance().playTool.togglePlay()

        render.clear()
        draw()
    }

    fun draw() {
        render.clear()

        val contextMapValues = scene.getAutomatonContextManager().getContextMap().values
        val set: MutableSet<Pair<Int, Int>> = mutableSetOf()
        for (context in contextMapValues) {
            set.addAll(context.visited)
        }

        val maze: ChessMaze = scene.getMaze()
        for (i in 0..width / h) {
            for (j in 0..width / h) {
                if (maze.getCellColor(
                        i - offset.first,
                        j - offset.second
                    ) == Constants.WALL_COLOR_ID
                ) render.fillCell(i, j, "#000000")
                if (set.contains(i - offset.first to j - offset.second)) render.fillCell(i, j, "#dddddd")
            }
        }

        for (context in contextMapValues) {
            if (context.visible) render.drawAutomaton(
                context.getX() + offset.first,
                context.getY() + offset.second,
                context.getColor()
            )
        }

        render.drawGrid()
    }


    fun getGridCellCoordinates(event: MouseEvent): Pair<Int, Int> = event.offsetX.toInt() / h  - offset.first to (-event.offsetY.toInt() + height) / h - offset.second

    private val mouseClickHandler: dynamic = { event: MouseEvent ->
        if (toolController.lineTool.isSelected()) {
            toolController.lineTool.selectPoint(
                event.offsetX.toInt() / h.toInt() - offset.first,
                (-event.offsetY.toInt() + height) / h.toInt() - offset.second
            )
        } else {
            hint.innerHTML =
                "Cell: { x: ${event.offsetX.toInt() / h.toInt() - offset.first}, y: ${(-event.offsetY.toInt() + height) / h.toInt() - offset.second} }"
            hint.style.marginLeft = event.clientX.toString() + "px"
            hint.style.marginTop = event.clientY.toString() + "px"
            hint.style.opacity = "100%"

            window.setTimeout({
                hint.style.opacity = "0"
            }, 2000)
        }

        //js("setTimeout(function(){hint.style.opacity='0%'}, 2000)")
        //console.log("Cell: { x: ${-offset.first + event.offsetX.toInt() / h}, y: ${-offset.second + (-event.offsetY.toInt() + height) / h} }")
}

    private val mouseUpHandler: dynamic = { event: MouseEvent ->

    }

    private val mouseMoveHandler: dynamic = { event: MouseEvent ->

    }

    private val mouseDownHandler: dynamic = { event: MouseEvent ->

    }

    private val contextMenuHandler: dynamic = { event: MouseEvent ->
        toolController.contextMenuInvoker(event)
    }

    private val keyDownHandler: dynamic = { event: KeyboardEvent -> // approved
        val c = event.key
        var x = this.offset.first
        var y = this.offset.second
        when (c) {
            "ArrowUp" -> y--
            "W" -> y--
            "w" -> y--
            "Ц" -> y--
            "ц" -> y--

            "ArrowDown" -> y++
            "S" -> y++
            "s" -> y++
            "Ы" -> y++
            "ы" -> y++

            "ArrowLeft" -> x++
            "A" -> x++
            "a" -> x++
            "Ф" -> x++
            "ф" -> x++

            "ArrowRight" -> x--
            "D" -> x--
            "d" -> x--
            "В" -> x--
            "в" -> x--

            else -> {
            }
        }
        this.offset = x to y

        draw()
    }

    private val mouseWheelHandler: dynamic = { event: WheelEvent ->

        if (event.deltaY > 0) {
            if (h in 16..56)
                offset = offset.first + this.height / (2 * h) + 1 to offset.second + this.width / (2 * h) + 1
            h /= 2
        } else {

            h *= 2
            if (h in 16..56)
                offset = offset.first - this.height / (2 * h) - 1 to offset.second - this.width / (2 * h) - 1
        }
        scene.h = h
        draw()
    }

    init {

        if (sceneController == null) sceneController = this

        canvas.addEventListener("click", mouseClickHandler)
        canvas.addEventListener("mousemove", mouseMoveHandler)
        canvas.addEventListener("mousedown", mouseDownHandler)
        canvas.addEventListener("mouseup", mouseUpHandler)
        canvas.addEventListener("wheel", mouseWheelHandler)
        canvas.addEventListener("keydown", keyDownHandler)
        canvas.addEventListener("contextmenu", contextMenuHandler)


//
//        val add = document.getElementById("add")
//        add.asDynamic().addEventListener("click") {
//            val maze: ChessMaze = scene.getMaze()
//            ChessMazeEditor(maze).removeLastBorder()
//        }

    }

    private val toolController = ToolController()

    fun setScene(scene: Scene) {
        this.scene = scene
    }

    private var timerId = 0

    fun run() {
        draw()
        timerId = window.setInterval(cycle, 200)
        scene.running = true
    }

    fun stop() {
        window.clearInterval(timerId)
    }


}
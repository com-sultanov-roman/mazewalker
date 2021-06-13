package scene.tools

import automaton.AutomatonRepository
import org.w3c.dom.events.MouseEvent
import scene.SceneController

class ToolController {

    companion object {
        private var toolController: ToolController? = null
        fun getInstance(): ToolController = toolController ?: throw NullPointerException("toolController not initialized")
    }

    private val contextMenu = ContextMenu()

    fun contextMenuInvoker(mouseEvent: MouseEvent){
        AutomatonRepository.getInstance().rmbClickPosition = SceneController.getInstance().getGridCellCoordinates(mouseEvent)
        contextMenu.invoke(mouseEvent)
        lineTool.disableSwitcher()
        lineTool.iconHighlighter()
    }

    val saveTool = SaveTool()
    val loadTool = LoadTool()
    val playTool = PlayTool()
    val lineTool = LineTool()
    val plusTool = PlusTool()
    val undoTool = UndoTool()
    val bulldozerTool = BulldozerTool()
    val broomTool = BroomTool()

    val outputTool = OutputTool()

    init {
        if (toolController == null) toolController = this
    }
}
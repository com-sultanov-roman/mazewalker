package scene.tools

import kotlinx.browser.document
import maze.core.ChessMaze
import maze.generators.ChessMazeEditor
import org.w3c.dom.Element
import scene.SceneController

class UndoTool {
    private var undoButton: Element? = null

    private fun undo() {
        ToolController.getInstance().lineTool.disableSwitcher()
        ToolController.getInstance().lineTool.iconHighlighter()
        val maze: ChessMaze = SceneController.getInstance().scene.getMaze()
        ChessMazeEditor(maze).removeLastBorder()
        SceneController.getInstance().draw()
    }

    init {
        undoButton = document.getElementById("undo")

        undoButton.asDynamic().addEventListener("click") {
            undo()
            OutputTool.getInstance().addString("Last border set removed.")
        }
    }
}
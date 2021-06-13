package scene.tools

import kotlinx.browser.document
import org.w3c.dom.Element
import scene.SceneController

class BulldozerTool {
    private var bulldozerTool: Element? = null

    private fun bulldoze() {
        SceneController.getInstance().scene.getMaze().clearBorders()
        SceneController.getInstance().draw()
        ToolController.getInstance().lineTool.disableSwitcher()
        ToolController.getInstance().lineTool.iconHighlighter()
    }

    init {
        bulldozerTool = document.getElementById("border_eraser")

        bulldozerTool.asDynamic().addEventListener("click"){
            bulldoze()
            OutputTool.getInstance().addString("All borders removed.")
        }
    }
}
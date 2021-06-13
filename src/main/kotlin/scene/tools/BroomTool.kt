package scene.tools

import kotlinx.browser.document
import org.w3c.dom.Element
import scene.SceneController

class BroomTool {
    private var broomButton: Element? = null

    fun dfaClean() {
        SceneController.getInstance().scene.getAutomatonContextManager().getContextMap().clear()
        SceneController.getInstance().draw()
    }

    init {
        broomButton = document.getElementById("dfa_cleaner")

        broomButton.asDynamic().addEventListener("click"){
            dfaClean()
            OutputTool.getInstance().addString("All automatons removed.")
        }
    }
}
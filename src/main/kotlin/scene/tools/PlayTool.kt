package scene.tools

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.Element
import scene.SceneController

class PlayTool {
    private var playButton: Element? = null

    fun togglePlay() {
        if (SceneController.getInstance().scene.running) {
            SceneController.getInstance().stop()
            playButton?.classList?.add("fa-play")
            playButton?.classList?.remove("fa-pause")
            SceneController.getInstance().scene.running = false
            OutputTool.getInstance().addString("Sim paused.")
        } else {
            if(SceneController.getInstance().scene.getAutomatonContextManager().getContextMap().isEmpty()){
                window.alert("Nothing to run")
                throw Exception("Nothing to run")
            }
            SceneController.getInstance().run()
            playButton?.classList?.add("fa-pause")
            playButton?.classList?.remove("fa-play")
            SceneController.getInstance().scene.running = true
            OutputTool.getInstance().addString("Sim started.")
        }
    }

    private fun playPauseSwitcher() {
        ToolController.getInstance().lineTool.disableSwitcher()
        ToolController.getInstance().lineTool.iconHighlighter()
        this.togglePlay()
    }

    init {
        playButton = document.getElementById("play")

        playButton.asDynamic().addEventListener("click") {
            playPauseSwitcher()
        }
    }
}
package scene.tools

import kotlinx.browser.document
import maze.core.ChessMaze
import org.w3c.dom.Element
import org.w3c.files.FileReader
import scene.Scene
import scene.SceneController

class LoadTool {
    private var loadButton: Element? = null

    private fun loadMaze(file: String) {
        val newMaze = ChessMaze(file)
        val scene = Scene(newMaze)
        SceneController.getInstance().setScene(scene)
        SceneController.getInstance().draw()
        OutputTool.getInstance().addString("Maze loaded successfully.")
    }

    private fun getFile() {
        val file = loadButton.asDynamic().files[0]
        val fileReader = FileReader()
        fileReader.readAsText(file)
        fileReader.onload = {
            loadMaze(fileReader.result as String)
        }
    }

    init {
        loadButton = document.getElementById("input__file")

        loadButton.asDynamic().addEventListener("change") {
            getFile()
        }
    }
}
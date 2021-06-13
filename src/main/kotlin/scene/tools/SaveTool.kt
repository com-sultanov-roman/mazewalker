package scene.tools

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import org.w3c.files.BlobPropertyBag
import scene.SceneController

class SaveTool {
    private var saveTool: Element? = null

    init {
        saveTool = document.getElementById("save_maze")

        saveTool.asDynamic().addEventListener("click") {
            val txt = SceneController.getInstance().scene.getMaze().toTXT()
            val blob = Blob(arrayOf(txt), BlobPropertyBag(type = "text/plain"))
            val link = document.createElement("a")
            link.setAttribute("href", URL.Companion.createObjectURL(blob))
            link.setAttribute("download", "maze.txt")
            link.asDynamic().click()
        }
    }
}
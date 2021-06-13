package scene.tools

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement

class OutputTool {
    companion object {
        private var outputTool: OutputTool? = null
        fun getInstance(): OutputTool = outputTool ?: throw NullPointerException("outputTool not initialized")
    }

    private var outputContent: Element? = null

    fun addString(str: String) {
        outputContent.asDynamic().value += str + "\n"
        console.log(str + "\n")
    }

    init {
        if (outputTool == null) outputTool = this

        outputContent = document.getElementById("preview_output_content")
        outputContent.asDynamic().value = ""
    }
}
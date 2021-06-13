package scene.tools

import kotlinx.browser.document
import kotlinx.browser.window
import maze.generators.ChessMazeEditor
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import scene.SceneController
import kotlin.text.toInt as toInt

class PlusTool {
    private val form: HTMLDivElement? = document.getElementById("input_area") as HTMLDivElement?
    private val plusButton: Element? = document.getElementById("plus")
    private val addButton: Element? = document.getElementById("add_btn")

    private val formula = document.getElementById("formula")

    private val startSegment = document.getElementById("start_segment")
    private val endSegment = document.getElementById("end_segment")

    private val offsetX = document.getElementById("offset_x")
    private val offsetY = document.getElementById("offset_y")

    private val radioButtons = document.getElementsByName("inlineRadioOptions")

    private var formEnabled = false

    val height = 340
    private fun switch() {
        if (!formEnabled) {
            form?.style?.opacity = "100%"
            form?.style?.display = "block"
            ToolController.getInstance().lineTool.disableSwitcher()
        } else {
            form?.style?.opacity = "0"
            form?.style?.display = "none"
        }
        formEnabled = !formEnabled

    }

    private var function = "sin(x)"
    private var startX = 0
    private var endX = 0
    private var _offsetX = 0
    private var _offsetY = 0
    private var fill: String = "u"
    var sceneController = SceneController.getInstance()


    private fun extract() {
        function = formula.asDynamic().value.toString()

        try {
            startX = startSegment.asDynamic().value.toString().toInt()
            endX = endSegment.asDynamic().value.toString().toInt()

            _offsetX = offsetX.asDynamic().value.toString().toInt()
            _offsetY = offsetY.asDynamic().value.toString().toInt()
        } catch (e: NumberFormatException) {
            startX = 0
            endX = 0

            _offsetX = 0
            _offsetY = 0
            switch()
            window.alert("Fields can not be empty!!!1111!!!")
            e.printStackTrace()
        }

        if (radioButtons[0].asDynamic().checked as Boolean) fill = "u"
        if (radioButtons[1].asDynamic().checked as Boolean) fill = "d"
    }

    init {
        addButton.asDynamic().addEventListener("click") {
            extract()
            ChessMazeEditor(sceneController.scene.getMaze()).generateBorderFromFunction(
                function, startX to endX, _offsetX to _offsetY, fill
            )
            switch()
            sceneController.draw()
            OutputTool.getInstance().addString("Border from function $function is set.")
        }

        plusButton.asDynamic().addEventListener("click", this::switch)
    }

}
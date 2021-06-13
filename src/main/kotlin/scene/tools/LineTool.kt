package scene.tools

import kotlinx.browser.document
import org.w3c.dom.Element
import scene.SceneController

class LineTool {
    private var lineButton: Element? = null
    private var lineButtonUp: Element? = null
    private var lineButtonDown: Element? = null
    private var lineButtonLeft: Element? = null
    private var lineButtonRight: Element? = null
    private var lineButtonNone: Element? = null
    private var lineButtonDeselect: Element? = null

    private var upHandler: LineToolHandler? = null
    private var downHandler: LineToolHandler? = null
    private var leftHandler: LineToolHandler? = null
    private var rightHandler: LineToolHandler? = null
    private var noneHandler: LineToolHandler? = null

    private val switchMap = mutableMapOf(
        upHandler to false,
        downHandler to false,
        leftHandler to false,
        rightHandler to false,
        noneHandler to false
    )

    fun selectPoint(x: Int, y: Int) {
        for (entry in switchMap.entries) {
            if (entry.value) {
                entry.key?.selectPoint(x, y)
                break
            }
        }
    }

    private var selected = false

    fun isSelected() = selected

    private fun reset() {
        for (entry in switchMap.entries) {
            entry.key?.deactivate()
            switchMap[entry.key] = false
        }
    }

    val upSwitcher = {
        if (SceneController.getInstance().scene.running) throw Exception("Can not edit maze during scene running")
        ToolController.getInstance().broomTool.dfaClean()
        reset()
        switchMap[upHandler] = true
        selected = true

    }

    val downSwitcher = {
        if (SceneController.getInstance().scene.running) throw Exception("Can not edit maze during scene running")
        ToolController.getInstance().broomTool.dfaClean()
        reset()
        switchMap[downHandler] = true
        selected = true

    }

    val leftSwitcher = {
        if (SceneController.getInstance().scene.running) throw Exception("Can not edit maze during scene running")
        ToolController.getInstance().broomTool.dfaClean()
        reset()
        switchMap[leftHandler] = true
        selected = true
    }

    val rightSwitcher = {
        if (SceneController.getInstance().scene.running) throw Exception("Can not edit maze during scene running")
        ToolController.getInstance().broomTool.dfaClean()
        reset()
        switchMap[rightHandler] = true
        selected = true
    }

    val noneSwitcher = {
        if (SceneController.getInstance().scene.running) throw Exception("Can not edit maze during scene running")
        ToolController.getInstance().broomTool.dfaClean()
        reset()
        switchMap[noneHandler] = true
        selected = true
    }

    val disableSwitcher = {
        reset()
        selected = false
        iconHighlighter()
    }

    fun iconHighlighter() {
        if (selected) {
            lineButton.asDynamic().style = """
                    border: solid 2px #b3deff;
                    background: 20%;
                    background-color: #475972;
                """.trimIndent()
        } else {
            lineButton.asDynamic().style = """
                    border: none;
                    background: transparent;
                """.trimIndent()
        }
    }

    init {
        lineButton = document.getElementById("line_tool")
        lineButtonUp = document.getElementById("line_tool_up")
        lineButtonDown = document.getElementById("line_tool_down")
        lineButtonLeft = document.getElementById("line_tool_left")
        lineButtonRight = document.getElementById("line_tool_right")
        lineButtonNone = document.getElementById("line_tool_none")
        lineButtonDeselect = document.getElementById("line_tool_disable")

        upHandler = LineToolHandler("u")
        downHandler = LineToolHandler("d")
        leftHandler = LineToolHandler("l")
        rightHandler = LineToolHandler("r")
        noneHandler = LineToolHandler("n")

        lineButtonUp.asDynamic().addEventListener("click") {
            upSwitcher()
            iconHighlighter()
        }

        lineButtonDown.asDynamic().addEventListener("click") {
            downSwitcher()
            iconHighlighter()
        }

        lineButtonLeft.asDynamic().addEventListener("click") {
            leftSwitcher()
            iconHighlighter()
        }

        lineButtonRight.asDynamic().addEventListener("click") {
            rightSwitcher()
            iconHighlighter()
        }

        lineButtonNone.asDynamic().addEventListener("click") {
            noneSwitcher()
            iconHighlighter()
        }

        lineButtonDeselect.asDynamic().addEventListener("click") {
            disableSwitcher()
            iconHighlighter()
        }
    }
}
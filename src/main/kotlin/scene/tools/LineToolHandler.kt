package scene.tools

import maze.generators.ChessMazeEditor
import scene.SceneController
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt

class LineToolHandler(private val type: String) {

    private var x1: Pair<Int, Int> = 0 to 0
    private var x2: Pair<Int, Int> = 0 to 0

    private var x1Set = false
    private var x2Set = false

    fun selectPoint(x: Int, y: Int): Boolean {
        if (!x1Set) {
            x1 = x to y
            x1Set = true
            return false
        }

        if (!x2Set) {
            x2 = x to y
            x2Set = true
            action()
        }
        return true
    }

    private fun action() {
        val maze = SceneController.getInstance().scene.getMaze()

        if (x2.first == x1.first && type != "u" && type != "d") {
            ChessMazeEditor(maze).generateVerticalBorder(
                (min(x1.second, x2.second) to max(x1.second, x2.second)), x2.first, type
            )

        } else if (x1 == x2) {
            ChessMazeEditor(maze).addDotBorder(x1.first, x1.second)

        } else {
            val a = (x2.second - x1.second) / (x2.first - x1.first).toDouble()
            val b = ((x1.second * x2.first - x1.first * x2.second) / (x2.first - x1.first).toDouble()).roundToInt()

            if (a != 0.0 || a == 0.0 && (type != "l" || type == "r")) {
                ChessMazeEditor(maze).generateLinearBorder(
                    (min(x1.first, x2.first) to max(x1.first, x2.first)), a, b, type
                )
            }


        }

        x1Set = false
        x2Set = false
        SceneController.getInstance().draw()
        OutputTool.getInstance().addString("Linear border set.")
    }

    fun deactivate() {
        x1Set = false
        x2Set = false
    }
}
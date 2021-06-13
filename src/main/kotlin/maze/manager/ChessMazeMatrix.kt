package maze.manager

import Constants.NO_COLOR_ID
import Constants.WALL_COLOR_ID
import maze.core.ChessMaze
import kotlin.math.abs

class ChessMazeMatrix(m: ChessMaze) {
    private val maze = m

    private var rows: Int = abs(maze.getTopLeftVertex().Y - maze.getBottomRightVertex().Y) + 3
    private var columns: Int = abs(maze.getTopLeftVertex().X - maze.getBottomRightVertex().X) + 3
    private var matrix: Array<Array<Int>> = Array(rows) { Array(columns) { NO_COLOR_ID } }
    private var metadata: MutableMap<String, Any> = mutableMapOf()

    private fun printMatrix(m: Array<Array<Int>>) {
        for (row in m) {
            for (elem in row) print("$elem ")
            println()
        }
    }

    private fun printMetadata(m: MutableMap<String, Any>) {
        for ((key, value) in m) {
            println("$key -> $value")
        }
    }

    init {
        val bl = maze.getVertexByCoordinate(maze.getTopLeftVertex().X, maze.getBottomRightVertex().Y)
        metadata["top_left"] = maze.getTopLeftVertex()
        metadata["bottom_right"] = maze.getBottomRightVertex()
        metadata["bottom_left"] = bl
        metadata["height"] = abs(maze.getTopLeftVertex().Y - maze.getBottomRightVertex().Y) + 1
        metadata["width"] = abs(maze.getTopLeftVertex().X - maze.getBottomRightVertex().X) + 1

        matrix[0] = Array(columns) { WALL_COLOR_ID }
        matrix[rows - 1] = Array(columns) { WALL_COLOR_ID }
        for (i in 1 until rows - 1) {
            for (j in 0 until columns) {
                if (j == 0 || j == columns - 1) matrix[i][j] = WALL_COLOR_ID
                else {
                    if (maze.getVertexByCoordinate(
                            maze.getTopLeftVertex().X + j - 1,
                            maze.getTopLeftVertex().Y - i + 1
                        ).color == WALL_COLOR_ID
                    ) matrix[i][j] = WALL_COLOR_ID
                }
            }
        }

        printMetadata(metadata)
        printMatrix(matrix)
    }
}
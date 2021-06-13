package maze.generators

import maze.core.ChessMaze

class ChessMazeEditor(private val maze: ChessMaze) {

    fun generateLinearBorder(
        segment: Pair<Int, Int> = maze.getTopLeftVertex().X to maze.getBottomRightVertex().X,
        a: Double,
        b: Int,
        fill: String = "none"
    ) = ChessMazeEditorCore.generateLinearBorder(maze, segment, a, b, fill)

    fun generateVerticalBorder(
        segment: Pair<Int, Int> = maze.getTopLeftVertex().Y to maze.getBottomRightVertex().Y,
        a: Int,
        fill: String = "none"
    ) = ChessMazeEditorCore.generateVerticalBorder(maze, segment, a, fill)


    fun generateBorderFromFunction(
        function: String,
        drawSegment: Pair<Int, Int> = maze.getTopLeftVertex().X to maze.getBottomRightVertex().X,
        offset: Pair<Int, Int> = 0 to 0,
        fill: String = "none"
    ) = ChessMazeEditorCore.generateBorderFromFunction(maze, function, drawSegment, offset, fill)

    fun addDotBorder(x: Int, y: Int) = ChessMazeEditorCore.addDotBorder(maze, x, y)

    fun removeLastBorder() = ChessMazeEditorCore.removeLastBorder(maze)
}
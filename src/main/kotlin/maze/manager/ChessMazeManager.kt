package maze.manager

import Constants.NO_COLOR_ID
import maze.core.ChessMaze
import maze.core.ChessMazeVertex

class ChessMazeManager {
    companion object {
        /**
         * Converts the maze to a matrix in which zeros correspond to white cells
         * and ones correspond to black cells (borders).
         * The first row of matrix contains metadata, such as:
         * coordinates of top-left corner, etc.
         */
        fun convertToMatrix(maze: ChessMaze): ChessMazeMatrix {
            return ChessMazeMatrix(maze)
        }

        fun getMazeFromMatrix(matrix: Array<Array<Int>>) {
            val tl = ChessMazeVertex(matrix[0][0], matrix[0][1], NO_COLOR_ID)
            // todo vertical reading

        }
    }
}


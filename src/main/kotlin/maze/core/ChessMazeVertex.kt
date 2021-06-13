package maze.core

import Constants.*

class ChessMazeVertex {
    var X: Int
        private set(value) {
            field = value
        }
    var Y: Int
        private set(value) {
            field = value
        }
    var color: Int
        set(value) {
            if (value > MAX_COLOR_ID && value != WALL_COLOR_ID && value != NO_COLOR_ID) {
                throw IllegalArgumentException()
            }
            field = value
        }

    constructor(x: Int, y: Int, color: Int) {
        this.X = x
        this.Y = y
        this.color = color
    }

    constructor(chessMazeVertex: ChessMazeVertex) {
        this.X = chessMazeVertex.X
        this.Y = chessMazeVertex.Y
        this.color = chessMazeVertex.color
    }

    constructor() {
        this.X = 0
        this.Y = 0
        this.color = NO_COLOR_ID
    }

    fun higherThan(vertex: ChessMazeVertex): Boolean {
        return this.Y > vertex.Y
    }

    fun lowerThan(vertex: ChessMazeVertex): Boolean {
        return this.Y < vertex.Y
    }

    fun moreLeftThan(vertex: ChessMazeVertex): Boolean {
        return this.X < vertex.X
    }

    fun moreRightThan(vertex: ChessMazeVertex): Boolean {
        return this.X > vertex.X
    }

    override fun toString(): String {
        return "[ ( " + this.X.toString() + " , " + this.Y.toString() + " ) , " + this.color.toString() + " ]"
    }
}
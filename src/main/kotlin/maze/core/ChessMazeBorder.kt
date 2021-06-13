package maze.core

import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min

class ChessMazeBorder {
    var startVertex: ChessMazeVertex
        private set(value) {
            field = ChessMazeVertex(value)
        }
    var endVertex: ChessMazeVertex
        private set(value) {
            field = ChessMazeVertex(value)
        }
    var color: Int
        private set(value) {
            field = this.startVertex.color
        }

    constructor(startVertex: ChessMazeVertex, endVertex: ChessMazeVertex) {
        if (startVertex.color != endVertex.color) {
            throw IllegalArgumentException("Start and End vertexes must have the same colour!")
        }
        this.startVertex =
            ChessMazeVertex(min(startVertex.X, endVertex.X), max(startVertex.Y, endVertex.Y), startVertex.color)
        this.endVertex =
            ChessMazeVertex(max(startVertex.X, endVertex.X), min(startVertex.Y, endVertex.Y), startVertex.color)
        this.color = startVertex.color
    }

    constructor(vertex: ChessMazeVertex) {
        this.startVertex = vertex
        this.endVertex = vertex
        this.color = vertex.color
    }

    constructor(vertexX: Int, vertexY: Int, vertexColor: Int) {
        this.startVertex = ChessMazeVertex(vertexX, vertexY, vertexColor)
        this.endVertex = ChessMazeVertex(vertexX, vertexY, vertexColor)
        this.color = vertexColor
    }

    constructor(startX: Int, startY: Int, endX: Int, endY: Int, color: Int) {
        this.startVertex = ChessMazeVertex(startX, startY, color)
        this.endVertex = ChessMazeVertex(endX, endY, color)
        this.color = color
    }

    fun VertexCount(): Int {
        return (abs(this.startVertex.X - this.endVertex.X) + 1) * (abs(this.startVertex.Y - this.endVertex.Y) + 1)
    }

    fun containsCoordinates(x: Int, y: Int): Boolean {
        return x >= min(this.startVertex.X, this.endVertex.X) && x <= max(this.startVertex.X, this.endVertex.X) &&
                y >= min(this.startVertex.Y, this.endVertex.Y) && y <= max(this.startVertex.Y, this.endVertex.Y)
    }

    fun containsVertex(vertex: ChessMazeVertex): Boolean {
        return this.containsCoordinates(vertex.X, vertex.Y)
    }

    private fun intersectsWithBorder(border: ChessMazeBorder): Boolean {
        if ((border.startVertex.moreRightThan(startVertex) && border.startVertex.moreLeftThan(endVertex)) ||
            (border.endVertex.moreRightThan(startVertex) && border.endVertex.moreLeftThan(endVertex))
        ) {
            if ((border.startVertex.lowerThan(startVertex) && border.startVertex.higherThan(endVertex)) ||
                (border.endVertex.lowerThan(startVertex) && border.endVertex.higherThan(endVertex)) ||
                (startVertex.lowerThan(border.startVertex) && startVertex.higherThan(border.endVertex)) ||
                (endVertex.lowerThan(border.startVertex) && endVertex.higherThan(border.endVertex))
            ) return true
        }
        if ((border.endVertex.lowerThan(startVertex) && border.endVertex.higherThan(endVertex)) ||
            (border.startVertex.lowerThan(startVertex) && border.startVertex.higherThan(endVertex))
        ) {
            if ((border.startVertex.moreRightThan(startVertex) && border.startVertex.moreLeftThan(endVertex)) ||
                (border.endVertex.moreRightThan(startVertex) && border.endVertex.moreLeftThan(endVertex)) ||
                (startVertex.moreRightThan(border.startVertex) && startVertex.moreLeftThan(border.endVertex)) ||
                (endVertex.moreRightThan(border.startVertex) && endVertex.moreLeftThan(border.endVertex))
            ) return true
        }
        return false
    }

    fun intersectWithBorder(border: ChessMazeBorder): Boolean {
        return intersectsWithBorder(border) || border.intersectsWithBorder(this)
    }

    fun containedIn(border: ChessMazeBorder): Boolean {
        return border.containsVertex(startVertex) && border.containsVertex(endVertex)
    }

    fun getIntersectArea(border: ChessMazeBorder): ChessMazeBorder? {
        if (!intersectWithBorder(border)) return null
        return ChessMazeBorder(
            ChessMazeVertex(
                max(border.startVertex.X, startVertex.X),
                min(startVertex.Y, border.startVertex.Y),
                border.color
            ),
            ChessMazeVertex(
                min(border.endVertex.X, endVertex.X),
                max(border.endVertex.Y, endVertex.Y),
                border.color)
        )
    }

    /*
    companion object {
        fun Split(border1: ChessMazeBorder, border2: ChessMazeBorder): MutableList<ChessMazeBorder> {
            var result = MutableList(0) { _ -> border2 }
            if (border2.StartVertex.X > border1.StartVertex.X && border2.StartVertex.Y < border1.StartVertex.Y) {
                result.add(
                    ChessMazeBorder(
                        border1.StartVertex,
                        ChessMazeVertex(border2.StartVertex.X - 1, border2.StartVertex.Y + 1, border1.Color)
                    )
                )
            }
            if (border2.StartVertex.Y < border1.StartVertex.Y) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(border2.StartVertex.X, border1.StartVertex.Y, border1.Color),
                        ChessMazeVertex(border2.EndVertex.X, border2.StartVertex.Y + 1, border1.Color)
                    )
                )
            }
            if (border2.StartVertex.Y < border1.StartVertex.Y && border2.EndVertex.X < border1.EndVertex.X) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(
                            border2.EndVertex.X + 1,
                            border1.StartVertex.Y,
                            border1.Color
                        ), ChessMazeVertex(border1.EndVertex.X, border2.StartVertex.Y + 1, border1.Color)
                    )
                )
            }
            if (border2.StartVertex.X > border1.StartVertex.X) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(border1.StartVertex.X, border2.StartVertex.Y, border1.Color),
                        ChessMazeVertex(border2.StartVertex.X - 1, border2.EndVertex.Y, border1.Color)
                    )
                )
            }
            if (border2.EndVertex.X < border1.EndVertex.X) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(
                            border2.EndVertex.X + 1,
                            border2.StartVertex.Y,
                            border1.Color
                        ), ChessMazeVertex(border1.EndVertex.X, border2.EndVertex.Y, border1.Color)
                    )
                )
            }
            if (border2.EndVertex.Y > border1.EndVertex.Y && border2.StartVertex.X > border1.StartVertex.X) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(
                            border1.StartVertex.X,
                            border2.EndVertex.Y - 1,
                            border1.Color
                        ), ChessMazeVertex(border2.StartVertex.X - 1, border1.EndVertex.Y, border1.Color)
                    )
                )
            }
            if (border2.EndVertex.Y > border1.EndVertex.Y) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(
                            border2.StartVertex.X,
                            border2.EndVertex.Y - 1,
                            border1.Color
                        ), ChessMazeVertex(border2.EndVertex.X, border1.EndVertex.Y, border1.Color)
                    )
                )
            }
            if (border2.EndVertex.Y > border1.EndVertex.Y && border2.EndVertex.X < border1.EndVertex.X) {
                result.add(
                    ChessMazeBorder(
                        ChessMazeVertex(
                            border2.EndVertex.X + 1,
                            border2.EndVertex.Y - 1,
                            border1.Color
                        ), border1.EndVertex
                    )
                )
            }
            if (result.isNotEmpty()) {
                for (i in 0..result.size - 1) {
                    if (i > result.size - 1) break
                    for (g in i + 1..result.size - 1) {
                        if (g > result.size - 1) break
                        if (result[i].JoinBorder(result[g])) {
                            result.removeAt(g)
                        }
                    }
                }
            }
            return result
        }

    }
    */

    fun joinBorder(border: ChessMazeBorder): Boolean {
        if (border.startVertex.X == startVertex.X && border.endVertex.X == endVertex.X) {
            if (border.endVertex.Y == border.startVertex.Y + 1) {
                startVertex = ChessMazeVertex(border.startVertex.X, border.startVertex.Y, border.color)
                return true
            }
            if (border.startVertex.Y == endVertex.Y - 1) {
                endVertex = ChessMazeVertex(border.endVertex.X, border.endVertex.Y, border.color)
                return true
            }
        }
        if (border.startVertex.Y == startVertex.Y && border.endVertex.Y == endVertex.Y) {
            if (border.startVertex.X == endVertex.X + 1) {
                endVertex = ChessMazeVertex(border.endVertex.X, border.endVertex.Y, border.color)
                return true
            }
            if (border.endVertex.X == startVertex.X - 1) {
                startVertex = ChessMazeVertex(border.startVertex.X, border.startVertex.Y, border.color)
                return true
            }
        }
        return false

    }

    override fun toString(): String {
        return "[ $startVertex , $endVertex ] "
    }

}





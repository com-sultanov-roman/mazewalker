package maze.generators

import Constants.*
import maze.core.ChessMaze
import maze.core.ChessMazeBorder
import maze.core.ChessMazeVertex
import kotlin.math.abs
import kotlin.math.roundToInt

internal class ChessMazeEditorCore : ChessMazeGenerator() {
    companion object {
        private val fillTypes: MutableList<String> = mutableListOf(
            "n", "none",
            "u", "up", "a", "above",
            "d", "down", "b", "below",
            /*"l", "left",*/
            /*"r", "right"*/
        )

        private fun removeRedundantVertices(
            v: MutableList<ChessMazeVertex>,
            tl: ChessMazeVertex,
            br: ChessMazeVertex
        ): MutableList<ChessMazeVertex> {
            val indices = mutableListOf<Int>()
            for (i in v.indices) {
                if (i == 0 && (
                            v[i + 1].higherThan(tl) ||
                                    v[i + 1].moreLeftThan(tl) ||
                                    v[i + 1].lowerThan(br) ||
                                    v[i + 1].moreRightThan(br)
                            ) ||
                    i == v.size - 1 && (
                            v[i - 1].higherThan(tl) ||
                                    v[i - 1].moreLeftThan(tl) ||
                                    v[i - 1].lowerThan(br) ||
                                    v[i - 1].moreRightThan(br)
                            ) ||
                    i > 0 && i < v.size && (
                            v[i - 1].higherThan(tl) && v[i + 1].higherThan(tl) ||
                                    v[i - 1].moreLeftThan(tl) && v[i + 1].moreLeftThan(tl) ||
                                    v[i - 1].lowerThan(br) && v[i + 1].lowerThan(br) ||
                                    v[i - 1].moreRightThan(br) && v[i + 1].moreRightThan(br)
                            ) || v[i].X == tl.X - 1 || v[i].X == br.X + 1
                ) indices.add(i)
            }

            val verticesMap = mutableMapOf<Int, ChessMazeVertex>()  // map of indices\vertices
            for (i in v.indices) {
                verticesMap[i] = v[i]
            }

            for (index in indices) {
                if (index in verticesMap.keys) {
                    verticesMap.remove(index)
                }
            }

            return verticesMap.values.toMutableList()
        }

        private fun edMakeBorders(
            v: MutableList<ChessMazeVertex>,
            fill: String,
            tl: ChessMazeVertex,
            br: ChessMazeVertex
        ): MutableList<ChessMazeBorder> {
            val b = mutableListOf<ChessMazeBorder>()
            when (fill) {
                "n", "none" -> return genMakeBorders(removeRedundantVertices(v, tl, br), fill, tl, br)

                "u", "up", "a", "above" -> {
                    for (i in 0 until v.size) {
                        if (v[i].X < tl.X || v[i].X > br.X) continue
                        if (v[i].Y == tl.Y) b.add(ChessMazeBorder(v[i]))
                        else if (v[i].Y > tl.Y) continue
                        else {
                            if (v[i].Y < br.Y) b.add(
                                ChessMazeBorder(
                                    ChessMazeVertex(v[i].X, br.Y, WALL_COLOR_ID),
                                    ChessMazeVertex(v[i].X, tl.Y, WALL_COLOR_ID)
                                )
                            )
                            else b.add(
                                ChessMazeBorder(
                                    ChessMazeVertex(v[i].X, v[i].Y, WALL_COLOR_ID),
                                    ChessMazeVertex(v[i].X, tl.Y, WALL_COLOR_ID)
                                )
                            )
                        }
                    }
                }

                "d", "down", "b", "below" -> {
                    for (i in 0 until v.size) {
                        if (v[i].X < tl.X || v[i].X > br.X) continue
                        if (v[i].Y == br.Y) b.add(ChessMazeBorder(v[i]))
                        else if (v[i].Y < br.Y) continue
                        else {
                            if (v[i].Y > tl.Y) {
                                b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i].X, tl.Y, WALL_COLOR_ID),
                                        ChessMazeVertex(v[i].X, br.Y, WALL_COLOR_ID)
                                    )
                                )
                            } else {
                                b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i].X, v[i].Y, WALL_COLOR_ID),
                                        ChessMazeVertex(v[i].X, br.Y, WALL_COLOR_ID)
                                    )
                                )
                            }
                        }
                    }
                }

                "r", "right" -> {
                    if (v[0].X == br.X) {
                        b.add(ChessMazeBorder(v[0]))
                        return b
                    } else {
                        if (v[0].X >= tl.X) b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(v[0].X, v[0].Y, WALL_COLOR_ID),
                                ChessMazeVertex(br.X, v[0].Y, WALL_COLOR_ID)
                            )
                        )
                        else b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(tl.X, v[0].Y, WALL_COLOR_ID),
                                ChessMazeVertex(br.X, v[0].Y, WALL_COLOR_ID)
                            )
                        )
                    }

                    for (i in 1 until v.size) {
                        if (v[i].Y == v[i - 1].Y) continue
                        if (v[i].Y < br.Y || v[i].Y > tl.Y) continue
                        if (v[i].X > br.X) break

                        if (v[i].X >= tl.X) b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(v[i].X, v[i].Y, WALL_COLOR_ID),
                                ChessMazeVertex(br.X, v[i].Y, WALL_COLOR_ID)
                            )
                        )
                        else b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(tl.X, v[i].Y, WALL_COLOR_ID),
                                ChessMazeVertex(br.X, v[i].Y, WALL_COLOR_ID)
                            )
                        )

                        if (abs(v[i].Y - v[i - 1].Y) > 1) {
                            val gaps = abs(v[i].Y - v[i - 1].Y) - 1
                            val sgnInvert = if (v[i].Y > v[i - 1].Y) -1 else 1

                            for (j in 1..gaps) {
                                if (v[i - 1].X >= tl.X) b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i - 1].X, v[i - 1].Y - j * sgnInvert, WALL_COLOR_ID),
                                        ChessMazeVertex(br.X, v[i - 1].Y - j * sgnInvert, WALL_COLOR_ID)
                                    )
                                )
                                else b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(tl.X, v[i - 1].Y - j * sgnInvert, WALL_COLOR_ID),
                                        ChessMazeVertex(br.X, v[i - 1].Y - j * sgnInvert, WALL_COLOR_ID)
                                    )
                                )
                            }
                        }
                    }
                }
                "l", "left" -> {
                    if (v[v.size - 1].X == tl.X) {
                        b.add(ChessMazeBorder(v[v.size - 1]))
                        return b
                    } else {
                        if (v[v.size - 1].X <= br.X) b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(v[v.size - 1].X, v[v.size - 1].Y, WALL_COLOR_ID),
                                ChessMazeVertex(tl.X, v[v.size - 1].Y, WALL_COLOR_ID)
                            )
                        )
                        else b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(br.X, v[v.size - 1].Y, WALL_COLOR_ID),
                                ChessMazeVertex(tl.X, v[v.size - 1].Y, WALL_COLOR_ID)
                            )
                        )
                    }

                    for (i in v.size - 2 downTo 0) {
                        if (v[i].Y == v[i + 1].Y) continue
                        if (v[i].Y < br.Y || v[i].Y > tl.Y) continue
                        if (v[i].X < tl.X) break

                        if (v[i].X <= br.X) b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(v[i].X, v[i].Y, WALL_COLOR_ID),
                                ChessMazeVertex(tl.X, v[i].Y, WALL_COLOR_ID)
                            )
                        )
                        else b.add(
                            ChessMazeBorder(
                                ChessMazeVertex(br.X, v[i].Y, WALL_COLOR_ID),
                                ChessMazeVertex(tl.X, v[i].Y, WALL_COLOR_ID)
                            )
                        )

                        if (abs(v[i].Y - v[i + 1].Y) > 1) {
                            val gaps = abs(v[i].Y - v[i + 1].Y) - 1
                            val sgnInvert = if (v[i].Y < v[i + 1].Y) -1 else 1
                            for (j in 1..gaps) {
                                if (v[i + 1].X >= tl.X) b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i + 1].X, v[i + 1].Y + j * sgnInvert, WALL_COLOR_ID),
                                        ChessMazeVertex(tl.X, v[i + 1].Y + j * sgnInvert, WALL_COLOR_ID)
                                    )
                                )
                                else b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(br.X, v[i + 1].Y + j * sgnInvert, WALL_COLOR_ID),
                                        ChessMazeVertex(tl.X, v[i + 1].Y + j * sgnInvert, WALL_COLOR_ID)
                                    )
                                )
                            }
                        }
                    }
                }
            }

            return b
        }

        fun generateLinearBorder(
            maze: ChessMaze,
            segment: Pair<Int, Int>,
            a: Double,
            b: Int,
            fill: String = "none"
        ) {
            val linFillTypes = fillTypes + mutableListOf("l", "left", "r", "right")
            if (fill !in linFillTypes) {
                throw IllegalArgumentException("Error (wrong \"fill\" parameter)")
            }

            if (a == 0.0) {
                if (fill == "r" || fill == "right" || fill == "l" || fill == "left")
                    throw IllegalArgumentException("Error (cannot fill to the left/right of horizontal line)")

                if (b > maze.getTopLeftVertex().Y || b < maze.getBottomRightVertex().Y)
                    throw Exception("Error (line is out of bounds)")

                val borderCollection: MutableList<ChessMazeBorder> = mutableListOf()

                val hor = if (segment != maze.getTopLeftVertex().X to maze.getBottomRightVertex().X) {
                    val start = when {
                        segment.first < maze.getTopLeftVertex().X -> maze.getTopLeftVertex().X
                        else -> segment.first
                    }
                    val end = when {
                        segment.second > maze.getBottomRightVertex().X -> maze.getBottomRightVertex().X
                        else -> segment.second
                    }
                    ChessMazeBorder(start, b, end, b, WALL_COLOR_ID)
                } else ChessMazeBorder(segment.first, b, segment.second, b, WALL_COLOR_ID)

                borderCollection.add(hor)

                if (fill == "u" || fill == "up" || fill == "a" || fill == "above") {
                    var border: ChessMazeBorder
                    for (x in hor.startVertex.X..hor.endVertex.X) {
                        border = ChessMazeBorder(
                            ChessMazeVertex(x, hor.startVertex.Y + 1, WALL_COLOR_ID),
                            ChessMazeVertex(x, maze.getTopLeftVertex().Y, WALL_COLOR_ID)
                        )
                        borderCollection.add(border)
                    }

                } else if (fill == "d" || fill == "down" || fill == "b" || fill == "below") {
                    var border: ChessMazeBorder
                    for (x in hor.startVertex.X..hor.endVertex.X) {
                        border = ChessMazeBorder(
                            ChessMazeVertex(x, hor.startVertex.Y - 1, WALL_COLOR_ID),
                            ChessMazeVertex(x, maze.getBottomRightVertex().Y, WALL_COLOR_ID)
                        )
                        borderCollection.add(border)
                    }
                }

                maze.addBorderCollection(borderCollection)

            } else {
                val y = mutableListOf<Int>()
                for (x in segment.first..segment.second) y.add((a * x + b).roundToInt())

                var j = 0
                var k = segment.first
                var inside = false
                while (true) {
                    if (k >= maze.getTopLeftVertex().X && k <= maze.getBottomRightVertex().X &&
                        y[j] <= maze.getTopLeftVertex().Y && y[j] >= maze.getBottomRightVertex().Y
                    ) {
                        inside = true
                        break
                    }
                    j++
                    if (j == y.size) break
                    k++

                }

                if (!inside) throw RuntimeException("Error (func out of bounds)")

                val vertices = mutableListOf<ChessMazeVertex>()
                for ((i, x) in (segment.first..segment.second).withIndex()) {
                    vertices.add(ChessMazeVertex(x, y[i], WALL_COLOR_ID))
                }


                val borders = edMakeBorders(vertices, fill, maze.getTopLeftVertex(), maze.getBottomRightVertex())
                for (border in borders) {
                    if (border.containsVertex(maze.getTopLeftVertex())) maze.getTopLeftVertex().color = WALL_COLOR_ID
                    if (border.containsVertex(maze.getBottomRightVertex())) maze.getBottomRightVertex().color =
                        WALL_COLOR_ID
                }

                maze.addBorderCollection(borders)
            }
        }

        fun generateVerticalBorder(
            maze: ChessMaze,
            segment: Pair<Int, Int>,
            a: Int,
            fill: String = "none"
        ) {
            val vertFillTypes = mutableListOf("n", "none", "l", "left", "r", "right")
            if (fill !in vertFillTypes) {
                throw IllegalArgumentException("Error (wrong \"fill\" parameter)")
            }

            val borderCollection: MutableList<ChessMazeBorder> = mutableListOf()

            val vert = if (segment != maze.getTopLeftVertex().Y to maze.getBottomRightVertex().Y) {
                val start = when {
                    segment.first < maze.getBottomRightVertex().Y -> maze.getBottomRightVertex().Y
                    else -> segment.first
                }
                val end = when {
                    segment.second > maze.getTopLeftVertex().Y -> maze.getTopLeftVertex().Y
                    else -> segment.second
                }
                ChessMazeBorder(a, start, a, end, WALL_COLOR_ID)
            } else ChessMazeBorder(a, segment.first, a, segment.second, WALL_COLOR_ID)

            borderCollection.add(vert)

            if (fill != "n" && fill != "none") {
                val stX = if (fill == "l" || fill == "left") a - 1 else a + 1
                val edX =
                    if (fill == "l" || fill == "left") maze.getTopLeftVertex().X else maze.getBottomRightVertex().X

                var border: ChessMazeBorder
                for (i in vert.startVertex.Y..vert.endVertex.Y) {
                    border = ChessMazeBorder(stX, i, edX, i, WALL_COLOR_ID)
                    borderCollection.add(border)
                }
            }

            for (border in borderCollection) {
                if (border.containsVertex(maze.getTopLeftVertex())) maze.getTopLeftVertex().color = WALL_COLOR_ID
                if (border.containsVertex(maze.getBottomRightVertex())) maze.getBottomRightVertex().color =
                    WALL_COLOR_ID
            }

            maze.addBorderCollection(borderCollection)
        }

        /**
         * Supported Functions and Valid Values for `fill`:
         * see `ChessMazeGenerator.GenerateUsingFunction` for details
         */
        fun generateBorderFromFunction(
            maze: ChessMaze,
            function: String,
            drawSegment: Pair<Int, Int>,
            offset: Pair<Int, Int>,
            fill: String
        ) {
            if (fill !in fillTypes) {
                throw IllegalArgumentException("Error (wrong \"fill\" parameter)")
            }

            val shiftSegment: Pair<Int, Int> = drawSegment.first - offset.first to drawSegment.second - offset.first

            val y = getFunctionValues(function, shiftSegment)
            for (i in 0 until y.size) {
                y[i] += offset.second
            }
            val vertices = mutableListOf<ChessMazeVertex>()
            var x = drawSegment.first
            for (i in 0 until y.size) {
                vertices.add(i, ChessMazeVertex(x, y[i], WALL_COLOR_ID))
                x++
            }

            val newBorderCollection =
                edMakeBorders(vertices, fill, maze.getTopLeftVertex(), maze.getBottomRightVertex())
            for (border in newBorderCollection) {
                if (border.containsVertex(maze.getTopLeftVertex())) maze.getTopLeftVertex().color = WALL_COLOR_ID
                if (border.containsVertex(maze.getBottomRightVertex())) maze.getBottomRightVertex().color =
                    WALL_COLOR_ID
            }

            maze.addBorderCollection(newBorderCollection)

        }

        fun addDotBorder(maze: ChessMaze, x: Int, y: Int) {
            maze.addBorderCollection(mutableListOf(ChessMazeBorder(ChessMazeVertex(x, y, WALL_COLOR_ID))))
        }

        fun removeLastBorder(maze: ChessMaze) {
            val lastCollection = maze.removeLastBorderCollection()
            for (b in lastCollection) {
                if (b.containsVertex(maze.getTopLeftVertex())) maze.getTopLeftVertex().color = NO_COLOR_ID
                if (b.containsVertex(maze.getBottomRightVertex())) maze.getBottomRightVertex().color = NO_COLOR_ID
            }
        }
    }
}
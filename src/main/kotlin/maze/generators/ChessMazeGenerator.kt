package maze.generators

import Constants.*
import maze.core.*
import maze.core.ChessMazeBorder
import maze.core.ChessMazeVertex
import kotlin.math.*

open class ChessMazeGenerator {
    companion object {
        private val fillTypes: MutableList<String> = mutableListOf(
            "n", "none",
            "u", "up", "a", "above",
            "d", "down", "b", "below"
        )

        fun makeEmpty(): ChessMaze {
            return ChessMaze(
                ChessMazeVertex(-10000,10000, NO_COLOR_ID),
                ChessMazeVertex(10000,-10000, NO_COLOR_ID),
            )
        }

        /**
         * Creates a rectangle with given width, height and bottom-left corner coordinates
         */
        fun generateRectangle(width: Int, height: Int, bl: Pair<Int, Int>): ChessMaze {
            return ChessMaze(
                ChessMazeVertex(bl.first, bl.second + height - 1, NO_COLOR_ID),
                ChessMazeVertex(bl.first + width - 1, bl.second, NO_COLOR_ID),
            )
        }

        private fun evaluateExpression(str: String): Double {
            return object : Any() {
                var pos = -1
                var ch = 0
                fun nextChar() {
                    ch = if (++pos < str.length) str[pos].toInt() else -1
                }

                fun eat(charToEat: Int): Boolean {
                    while (ch == ' '.toInt()) nextChar()
                    if (ch == charToEat) {
                        nextChar()
                        return true
                    }
                    return false
                }

                fun parse(): Double {
                    nextChar()
                    val x = parseExpression()
                    if (pos < str.length) throw RuntimeException("Unexpected: " + ch.toChar())
                    return x
                }

                // Grammar:
                // expression = term | expression `+` term | expression `-` term
                // term = factor | term `*` factor | term `/` factor
                // factor = `+` factor | `-` factor | `(` expression `)`
                //        | number | functionName factor | factor `^` factor
                fun parseExpression(): Double {
                    var x = parseTerm()
                    while (true) {
                        when {
                            eat('+'.toInt()) -> x += parseTerm() // addition
                            eat('-'.toInt()) -> x -= parseTerm() // subtraction
                            else -> return x
                        }
                    }
                }

                fun parseTerm(): Double {
                    var x = parseFactor()
                    while (true) {
                        when {
                            eat('*'.toInt()) -> x *= parseFactor() // multiplication
                            eat('/'.toInt()) -> {                  // division
                                val div = parseFactor()
                                if (div < 1e-8) throw ArithmeticException("Error (division by 0)")
                                x /= div
                            }
                            else -> return x
                        }
                    }
                }

                fun parseFactor(): Double {
                    if (eat('+'.toInt())) return parseFactor() // unary plus
                    if (eat('-'.toInt())) return -parseFactor() // unary minus
                    var x: Double
                    val startPos = pos
                    if (eat('('.toInt())) { // parentheses
                        x = parseExpression()
                        eat(')'.toInt())
                    } else if (ch >= '0'.toInt() && ch <= '9'.toInt() || ch == '.'.toInt()) { // numbers
                        while (ch >= '0'.toInt() && ch <= '9'.toInt() || ch == '.'.toInt()) nextChar()
                        x = str.substring(startPos, pos).toDouble()
                    } else if (ch >= 'a'.toInt() && ch <= 'z'.toInt()) { // functions
                        while (ch >= 'a'.toInt() && ch <= 'z'.toInt()) nextChar()
                        val func = str.substring(startPos, pos)
                        x = parseFactor()

                        x = when (func) {
                            "abs" -> abs(x)
                            "sqrt" -> {
                                if (x < 0) throw ArithmeticException("Error (square root of negative number)")
                                sqrt(x)
                            }
                            "sin" -> sin(x)
                            "cos" -> cos(x)
                            "exp" -> exp(x)
                            "ln" -> {
                                if (x <= 0) throw ArithmeticException("Error (logarithm of non-positive number)")
                                ln(x)
                            }
                            "log10" -> {
                                if (x <= 0) throw ArithmeticException("Error (logarithm of non-positive number)")
                                log10(x)
                            }
                            "log2" -> {
                                if (x <= 0) throw ArithmeticException("Error (logarithm of non-positive number)")
                                log2(x)
                            }
                            else -> throw RuntimeException("Unknown function: $func")
                        }
                    } else throw RuntimeException("Unexpected: " + ch.toChar())

                    if (eat('^'.toInt())) x = x.pow(parseFactor()) // exponentiation
                    return x
                }
            }.parse()
        }

        protected fun getFunctionValues(function: String, segment: Pair<Int, Int>): MutableList<Int> {
            var hasVariable = false
            for (i in 0..function.length) {
                if (function[i] == 'x') {
                    if (i > 0 && i < function.length - 1 && function[i - 1] == 'e' && function[i + 1] == 'p') continue
                    hasVariable = true
                    break
                }
            }
            if (!hasVariable) {
                return mutableListOf(evaluateExpression(function).roundToInt())
            }

            val results = mutableListOf<Int>()
            for (x in segment.first..segment.second) {
                val initExpression = function.toMutableList()
                val evalExpression = function.toMutableList()
                var eOffset = 0
                val xList = x.toString().toMutableList()

                for (j in 0 until initExpression.size) {
                    if (initExpression[j] == 'x') {
                        if (j > 0 && j < initExpression.size && initExpression[j - 1] == 'e' && initExpression[j + 1] == 'p') continue
                        evalExpression[j + eOffset] = xList[0]
                        var k = 1
                        for (x_ind in 1 until xList.size) {
                            evalExpression.add(j + eOffset + k, xList[x_ind])
                            ++k
                        }
                        eOffset += (xList.size - 1)
                    }
                }
                results.add(evaluateExpression(evalExpression.joinToString("")).roundToInt())
            }
            return results
        }

        protected fun genMakeBorders(
            v: MutableList<ChessMazeVertex>,
            fill: String,
            tl: ChessMazeVertex,
            br: ChessMazeVertex
        ): MutableList<ChessMazeBorder> {
            val b = mutableListOf<ChessMazeBorder>()
            val vb = mutableListOf<ChessMazeBorder>()

            // manhattan metrics: dist((x1, y1), (x2, y2)) = abs(x1 - x2) + abs(y1 - y2)
            when (fill) {
                "n", "none" -> {
                    var actStartY: Int
                    var actEndY: Int
                    var skipped = false

                    for (i in 0 until v.size) {
                        if (!(v[i].higherThan(tl) || v[i].lowerThan(br))) vb.add(ChessMazeBorder(v[i]))
                    }

                    for (i in 0 until v.size - 1) {
                        if (v[i + 1].X - v[i].X > 1 ||
                            ((v[i].higherThan(tl) || v[i].lowerThan(br)) && (v[i + 1].Y == tl.Y || v[i + 1].Y == br.Y)) ||
                            ((1 + abs(v[i + 1].Y - v[i].Y)) <= 2)
                        ) {
                            skipped = true
                            continue
                        }

                        if (v[i].higherThan(v[i + 1])) {
                            actStartY = if (v[i].higherThan(tl)) tl.Y else v[i].Y - 1
                            actEndY = if (v[i + 1].lowerThan(br)) br.Y else v[i + 1].Y + 1

                            if (!skipped && b.isNotEmpty() && b.last().endVertex.lowerThan(v[i])) {
                                if (v[i + 1].Y <= b.last().endVertex.Y && v[i + 1].Y >= b.last().startVertex.Y - 1) continue
                                b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i + 1].X, b.last().startVertex.Y - 1, WALL_COLOR_ID),
                                        ChessMazeVertex(v[i + 1].X, actEndY, WALL_COLOR_ID)
                                    )
                                )
                            } else {
                                b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i].X, actStartY, WALL_COLOR_ID),
                                        ChessMazeVertex(v[i].X, actEndY, WALL_COLOR_ID)
                                    )
                                )
                            }
                        }

                        if (v[i].lowerThan(v[i + 1])) {
                            actStartY = if (v[i].lowerThan(br)) br.Y else v[i].Y + 1
                            actEndY = if (v[i + 1].higherThan(tl)) tl.Y else v[i + 1].Y - 1

                            if (!skipped && b.isNotEmpty() && b.last().startVertex.higherThan(v[i])) {
                                if (v[i + 1].Y <= b.last().startVertex.Y + 1 && v[i + 1].Y >= b.last().endVertex.Y) continue
                                b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i + 1].X, b.last().startVertex.Y + 1, WALL_COLOR_ID),
                                        ChessMazeVertex(v[i + 1].X, actEndY, WALL_COLOR_ID)
                                    )
                                )
                            } else {
                                b.add(
                                    ChessMazeBorder(
                                        ChessMazeVertex(v[i].X + 1, actStartY, WALL_COLOR_ID),
                                        ChessMazeVertex(v[i].X + 1, actEndY, WALL_COLOR_ID)
                                    )
                                )
                            }
                        }
                        skipped = false
                    }
                    for (i in vb) b.add(i)
                }
                "u", "up", "a", "above" -> {
                    for (i in 0 until v.size) {

                        if (v[i].Y != tl.Y) {
                            b.add(
                                ChessMazeBorder(
                                    ChessMazeVertex(v[i].X, v[i].Y, WALL_COLOR_ID),
                                    ChessMazeVertex(v[i].X, tl.Y, WALL_COLOR_ID)
                                )
                            )
                        } else b.add(ChessMazeBorder(v[i]))
                    }
                }
                "d", "down", "b", "below" -> {
                    for (i in 0 until v.size) {
                        if (v[i].Y != br.Y) {
                            b.add(
                                ChessMazeBorder(
                                    ChessMazeVertex(v[i].X, v[i].Y, WALL_COLOR_ID),
                                    ChessMazeVertex(v[i].X, br.Y, WALL_COLOR_ID)
                                )
                            )
                        } else b.add(ChessMazeBorder(v[i]))
                    }
                }
            }
            return b
        }

        /**
         * Supported Functions:
         *  - `abs(x)`, `sqrt(x)`
         *  - `sin(x)`, `cos(x)`,
         *  - `ln(x)`, `log2(x)`, `log10(x)`
         *  - `exp(x)`
         *  - `(x)^a`
         *
         * All functions must be continuous in the given segment
         *
         *  Valid Values for `fill` are:
         *  `"n"\"none"`, `"a"\"above"\"u"\"up"`, `"b"\"below"\"u"\"up"`
         */
        fun generateUsingFunction(
            function: String,
            segment: Pair<Int, Int>,
            fill: String = "none"
        ): ChessMaze {
            if (fill !in fillTypes)
                throw IllegalArgumentException("Error (wrong \"fill\" parameter)")

            val y = getFunctionValues(function, segment)
            if (y.size == 1) {
                throw RuntimeException("Error (cannot create maze using constant function)")
            }

            val topLeftVertex = y.maxOrNull()?.let { ChessMazeVertex(segment.first, it, WALL_COLOR_ID) }
            val bottomRightVertex = y.minOrNull()?.let { ChessMazeVertex(segment.second, it, WALL_COLOR_ID) }
            if (topLeftVertex == null || bottomRightVertex == null)
                throw NoSuchElementException("Error (something went wrong with getting function results)")

            val vertices = mutableListOf<ChessMazeVertex>()
            for ((i, x) in (segment.first..segment.second).withIndex()) {
                vertices.add(ChessMazeVertex(x, y[i], WALL_COLOR_ID))
            }

            val borderCollection = genMakeBorders(vertices, fill, topLeftVertex, bottomRightVertex)

            return ChessMaze(topLeftVertex, bottomRightVertex, borderCollection)
        }
    }
}
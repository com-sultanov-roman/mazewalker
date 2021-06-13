package maze.core

import Constants.*
import kotlin.math.*

class ChessMaze {
    private lateinit var topLeftVertex: ChessMazeVertex
    private lateinit var bottomRightVertex: ChessMazeVertex
    private var borderCollections: MutableList<MutableList<ChessMazeBorder>> = mutableListOf(mutableListOf())

    constructor(tl: ChessMazeVertex, br: ChessMazeVertex, init: MutableList<ChessMazeBorder> = mutableListOf()) {
        this.topLeftVertex = tl
        this.bottomRightVertex = br
        this.borderCollections.removeLast()
        if (init.isNotEmpty()) this.borderCollections.add(init)
    }

    constructor(txt: String) {
        val strings = txt.split("\n")
        var values: List<String>

        this.borderCollections.removeLast()
        val borderCollection: MutableList<ChessMazeBorder> = mutableListOf()

        for (string in strings) {
            values = string.split(" ")
            when {
                values[0] == "tl:" -> this.topLeftVertex =
                    ChessMazeVertex(values[1].toInt(), values[2].toInt(), values[3].replace("\r", "").toInt())
                values[0] == "br:" -> this.bottomRightVertex =
                    ChessMazeVertex(values[1].toInt(), values[2].toInt(), values[3].replace("\r", "").toInt())
                values[0].startsWith("col1") -> continue
                else -> {
                    if (values.size == 4) {
                        borderCollection.add(
                            ChessMazeBorder(
                                values[0].toInt(),
                                values[1].toInt(),
                                values[2].toInt(),
                                values[3].replace("\r", "").toInt(),
                                WALL_COLOR_ID
                            )
                        )

                    } else {
                        this.borderCollections.add(borderCollection.toMutableList())
                        borderCollection.clear()
                    }
                }
            }
        }
    }

    fun getTopLeftVertex(): ChessMazeVertex = this.topLeftVertex

    fun getBottomRightVertex(): ChessMazeVertex = this.bottomRightVertex

    fun addBorderCollection(borderCollection: MutableList<ChessMazeBorder>) {
        this.borderCollections.add(borderCollection)

        /*
        var s = borders.size
        val temp: MutableList<MutableList<ChessMazeBorder>> = mutableListOf(mutableListOf())
        temp.addAll(borders)

        var i = 0
        while (true) {
            if (i < 0) i = 0
            if (borders[i].ContainedIn(borderCollection)) {
                borders.remove(borders[i])
                i--
                continue
            }
            if (borders[i].IntersectWithBorder(borderCollection)) {
                borders.addAll(ChessMazeBorder.Split(borders[i], borders[i].GetIntersectArea(borderCollection)!!))
                borders.remove(borders[i])
                i--
                continue
            }
            i++
            if (i == borders.size) break
        }
        /*
        for (i in 0..Borders.size - 1) {
            if (temp[i].ContainedIn(border)) {
                temp.remove(temp[i])
                i.dec()
                continue
            }
            if (temp[i].IntersectWithBorder(border)) {
                temp.addAll(ChessMazeBorder.Split(temp[i], temp[i].GetIntersectArea(border)!!))
                temp.remove(temp[i])
                i.dec()
                continue
            }
        }
        */
        temp.add(borderCollection)
        borders = temp
        */
    }

    fun removeLastBorderCollection(): MutableList<ChessMazeBorder> = this.borderCollections.removeLast()

    fun clearBorders() = this.borderCollections.clear()

    fun getVertexByCoordinate(x: Int, y: Int): ChessMazeVertex {
        if (x >= bottomRightVertex.X + 1 || x <= topLeftVertex.X - 1 || y <= bottomRightVertex.Y - 1 || y >= topLeftVertex.Y + 1)
            return ChessMazeVertex(x, y, WALL_COLOR_ID)

        for (col in borderCollections) {
            for (b in col) {
                if (b.containsCoordinates(x, y)) {
                    return ChessMazeVertex(x, y, b.color)
                }
            }
        }
        return ChessMazeVertex(x, y, NO_COLOR_ID)
    }

    fun getValidDirection(x: Int, y: Int): String {
        if (this.getVertexByCoordinate(x, y).color == WALL_COLOR_ID)
            throw IllegalArgumentException("Error (the specified vertex is a part of a wall)")

        var result = ""
        if (this.getVertexByCoordinate(x, y + 1).color == NO_COLOR_ID) result += "N"
        if (this.getVertexByCoordinate(x, y - 1).color == NO_COLOR_ID) result += "S"
        if (this.getVertexByCoordinate(x + 1, y).color == NO_COLOR_ID) result += "E"
        if (this.getVertexByCoordinate(x - 1, y).color == NO_COLOR_ID) result += "W"

        return result
    }

    fun getCellColor(x: Int, y: Int): Int {
        return this.getVertexByCoordinate(x, y).color
    }

    fun toTXT(): String {
        var txt = "tl: ${topLeftVertex.X} ${topLeftVertex.Y} ${topLeftVertex.color}\n"
        txt += "br: ${bottomRightVertex.X} ${bottomRightVertex.Y} ${bottomRightVertex.color}\n"

        var cnt = 1

        for (col in borderCollections) {
            txt += "col$cnt:\n"
            for (b in col) {
                txt += "${b.startVertex.X} ${b.startVertex.Y} ${b.endVertex.X} ${b.endVertex.Y}\n"
            }
            cnt++
        }

        return txt
    }

    override fun toString(): String {
        var result = "TopLeft: ${topLeftVertex}\nBottomRight: ${bottomRightVertex}\nBorders:\n"
        var cnt = 1
        for (col in borderCollections) {
            result += "Set $cnt:\n"
            for (b in col) {
                result += b.toString() + "\n"
            }
            cnt++
        }
        return result
    }
}

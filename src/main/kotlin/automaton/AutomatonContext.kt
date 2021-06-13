package automaton

import compile.Compiler

class AutomatonContext(private val automaton: Automaton): Automaton {

    private var x: Int = 16

    private var y: Int = 33

    var movable: Boolean = true

    var visible: Boolean = true

    var color: String = "#ff0000"

    var visited: MutableSet<Pair<Int, Int>> = mutableSetOf()


    override fun next(input: String): String {
        val output: String = this.automaton.next(input)
        when(output){
            "E" -> x++
            "W" -> x--
            "S" -> y--
            "N" -> y++
        }
        if(output!="L") visited.add(x to y)
        return output
    }

    override fun getState(): String {
        return this.automaton.getState()
    }

    override fun getLastOutput(): String {
        return this.automaton.getLastOutput()
    }

    override fun prototype(): Automaton {
        TODO("Not yet implemented")
    }

    override fun getColor(): String = this.color

    fun getX() = x
    fun getY() = y

    fun setXY(xy: Pair<Int, Int>): AutomatonContext{
        this.x = xy.first
        this.y = xy.second
        visited.add(x to y)
        return this
    }

}
package automaton


interface Automaton {

    fun getName(): String{
        return "dfa"
    }

    fun getColor(): String{
        return "#ff0000"
    }

    fun next(input: String): String

    fun getState(): String

    fun getLastOutput(): String

    fun prototype(): Automaton

}
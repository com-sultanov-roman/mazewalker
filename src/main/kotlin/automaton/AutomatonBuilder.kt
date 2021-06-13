package automaton

interface AutomatonBuilder {

    fun row(curState: String,
            input: String,
            nextState: String,
            output: String): AutomatonBuilder

    fun name(name: String): AutomatonBuilder

    fun color(color: String): AutomatonBuilder

    fun build(): Automaton
}
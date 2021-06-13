package automaton

import Constants.STATE_DEFAULT_NAME

class DFA: Automaton, Prepare {

    var stateMap: MutableMap<String, String> = mutableMapOf()
        set(value) {field=value}

    var currentState: String = STATE_DEFAULT_NAME

    var output: String = "L"

    var name: String = "dfa"

    var color: String = "#ff0000"

    override fun next(input: String): String {
        val input_ = prepareInput(input)
        val key = "$currentState%$input_"
        val stateOutput = stateMap.getOrElse(key){"$currentState%L"}.split("%")
        val state = stateOutput[0]
        val output = stateOutput[1]
        currentState = state
        return output
    }


    override fun getState(): String {
        return currentState
    }

    override fun getLastOutput(): String {
        return output
    }

    override fun prototype(): Automaton {
        val dfa = DFA()
        dfa.color = this.color
        dfa.name = this.name
        dfa.currentState = this.currentState
        dfa.stateMap = this.stateMap.toMutableMap()
        return dfa as Automaton
    }

    override fun getName(): String {
        return this.name
    }

    override fun getColor(): String {
        return this.color
    }
}
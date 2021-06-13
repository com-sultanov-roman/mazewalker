package automaton

class DFABuilder:
    AutomatonBuilder,
    Prepare {

    private val stateMap: MutableMap<String, String> = HashMap<String, String>()

    private var name_: String = "dfa"
    private var color_: String = "#ff0000"

    override fun row(curState: String,
                     input: String,
                     nextState: String,
                     output: String): AutomatonBuilder {
        val input_ = prepareInput(input)
        val key = "$curState%$input_"
        if(stateMap.containsKey(key)){
            throw Exception("Error: row with input: " +
                    "$input and state: " +
                    "$curState is already specified")
        }else{
            stateMap[key] = "$nextState%$output"
        }
        return this
    }

    override fun name(name: String): AutomatonBuilder {
        this.name_ = name
        return this
    }

    override fun color(color: String): AutomatonBuilder {
        this.color_ = color
        return this
    }

    override fun build(): Automaton {
        val dfa = DFA()
        dfa.color = color_
        dfa.name = name_
        dfa.stateMap = stateMap
        return dfa as Automaton
    }
}
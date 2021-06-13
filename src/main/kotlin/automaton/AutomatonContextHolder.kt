package automaton

class AutomatonContextHolder {
    var contextMap: MutableMap<String, AutomatonContext> = mutableMapOf()

    fun addContext(name: String, automatonContext: AutomatonContext){
        contextMap[name] = automatonContext
    }

    fun getContextByName(name: String): AutomatonContext?{
        return contextMap[name]
    }

}
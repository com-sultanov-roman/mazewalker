package automaton

class AutomatonContextManager {

    private val contextMap: MutableMap<String, AutomatonContext> = mutableMapOf()


    fun addContext(automatonContext: AutomatonContext, contextName: String): Unit {
        if(contextMap[contextName]==null)
            contextMap[contextName] = automatonContext

    }

    fun getContexts(contextName: String): AutomatonContext{
        return contextMap[contextName] ?: throw NullPointerException("No such context with name \"$contextName\"")
    }

    fun move(){
//        contextMap.forEach { _, u ->
//            if(u.movable) u.next("E")
//        }
    }

    fun getContextMap(): MutableMap<String, AutomatonContext>{
        return contextMap
    }



}
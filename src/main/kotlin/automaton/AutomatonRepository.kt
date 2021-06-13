package automaton

import Constants.WALL_COLOR_ID
import kotlinx.browser.document
import org.w3c.dom.events.MouseEvent
import scene.SceneController

class AutomatonRepository private constructor() {

    companion object {
        private val automatonRepository = AutomatonRepository()
        fun getInstance(): AutomatonRepository {
            return automatonRepository
        }
    }

    var rmbClickPosition = 0 to 0

    var automatonMap: MutableMap<String, Automaton> = mutableMapOf()

    val listener = { id: String ->
        console.log(id)
    }

    fun addEventListeners() {
        for (v in automatonMap.values) {
            document.getElementById(v.getName()).asDynamic().addEventListener("click") { event: MouseEvent ->
                val automatonContext = AutomatonContext(
                    automatonMap[v.getName()]?.prototype()
                        ?: throw NullPointerException("no automaton with name ${v.getName()}")
                )
                automatonContext.color = v.getColor()

                if(SceneController.getInstance().scene.getMaze().getCellColor(rmbClickPosition.first, rmbClickPosition.second)== WALL_COLOR_ID){
                    throw IllegalArgumentException("Automaton can not be placed on border")
                }

                automatonContext.setXY(rmbClickPosition)
                val name = kotlin.random.Random.nextInt(42, 4242)
                SceneController.getInstance().scene.getAutomatonContextManager()
                    .addContext(automatonContext, v.getName() + "#" + name)
                SceneController.getInstance().draw()
            }
        }
    }

    override fun toString(): String {
        val stringBuilder = StringBuilder()
        for (v in automatonMap.values) stringBuilder.append("<div class=\"item\" id=\"${v.getName()}\">${v.getName()}</div>")
            .append("\n")
        return stringBuilder.toString()
    }
}
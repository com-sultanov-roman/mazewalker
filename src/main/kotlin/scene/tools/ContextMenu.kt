package scene.tools

import automaton.AutomatonRepository
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.Element
import org.w3c.dom.events.MouseEvent
import scene.SceneController

class ContextMenu {

    private var contextElement: Element? = null

    init {
        contextElement = document.getElementById("context-menu")
        window.asDynamic().addEventListener("click"){
            contextElement.asDynamic().classList.remove("active")
        }
    }

    fun invoke(mouseEvent: MouseEvent){

        mouseEvent.preventDefault()
        contextElement.asDynamic().style.top = mouseEvent.clientY.toString() + "px"
        contextElement.asDynamic().style.left = mouseEvent.clientX.toString() + "px"
        contextElement.asDynamic().classList.add("active")

        contextElement?.innerHTML = AutomatonRepository.getInstance().toString()
        AutomatonRepository.getInstance().addEventListeners()
    }

//    fun lmbClick(){
//        document.getElementById("context-menu")?.classList?.remove("active")
//    }
}
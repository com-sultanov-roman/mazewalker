package handler.mouse

import org.w3c.dom.events.MouseEvent

abstract class BaseMouseEventHandler: Handler {

    var type: String = "none"

    var over = false
    var move = false
    var pressed = false

    override fun mouseDown(mouseEvent: MouseEvent){
        pressed = true
        console.log(true)
        mouseDownHandler(mouseEvent)
    }

    override fun mouseUp(mouseEvent: MouseEvent){
        pressed = false
        mouseUpHandler(mouseEvent)
    }

    override fun mouseOver(mouseEvent: MouseEvent){
        over = true
        mouseOverHandler(mouseEvent)
    }

    override fun mouseOut(mouseEvent: MouseEvent){
        over = false
        mouseOutHandler(mouseEvent)
    }

    override fun mouseMove(mouseEvent: MouseEvent) {
        move = true
        mouseMoveHandler(mouseEvent)
    }

    abstract fun mouseDownHandler(mouseEvent: MouseEvent)
    abstract fun mouseUpHandler(mouseEvent: MouseEvent)
    abstract fun mouseOverHandler(mouseEvent: MouseEvent)
    abstract fun mouseOutHandler(mouseEvent: MouseEvent)
    abstract fun mouseMoveHandler(mouseEvent: MouseEvent)
}
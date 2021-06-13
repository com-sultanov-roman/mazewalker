package handler.mouse

import org.w3c.dom.events.MouseEvent

interface Handler {

    fun mouseDown(mouseEvent: MouseEvent)

    fun mouseUp(mouseEvent: MouseEvent)

    fun mouseOver(mouseEvent: MouseEvent)

    fun mouseOut(mouseEvent: MouseEvent)

    fun mouseMove(mouseEvent: MouseEvent)

}
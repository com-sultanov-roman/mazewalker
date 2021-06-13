package handler.mouse

import org.w3c.dom.events.MouseEvent
import scene.Scene

class MoveTool(private val scene: Scene): BaseMouseEventHandler() {

    private var x = 0
    private var y = 0

    override fun mouseDownHandler(mouseEvent: MouseEvent) {
        pressed = true
        x = mouseEvent.offsetX.toInt()
        y = mouseEvent.offsetY.toInt()
    }

    override fun mouseUpHandler(mouseEvent: MouseEvent) {
        pressed = false
    }

    override fun mouseOverHandler(mouseEvent: MouseEvent) {
        TODO("Not yet implemented")
    }

    override fun mouseOutHandler(mouseEvent: MouseEvent) {
        TODO("Not yet implemented")
    }

    override fun mouseMoveHandler(mouseEvent: MouseEvent) {
        if(pressed){



            val _x = 0
            val _y = 0
            scene.offsetX += (_x - x)
            scene.offsetY += (_y - y)

            console.log(_x - x)
            console.log(_y - y)

            mouseDownHandler(mouseEvent)

        }
    }
}
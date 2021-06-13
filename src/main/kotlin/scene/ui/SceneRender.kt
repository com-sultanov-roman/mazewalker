package scene.ui

import scene.Scene

class SceneRender(var scene: Scene, private val context2d: dynamic) : BaseRender {

    var h: Int = 15
        set(value) {
            if (value in 8..112){
                field = value
            }
        }

    var offsetX = 0
    var offsetY = 0

    var width = 897
    var height = 897

    override fun drawAutomaton(x: Int, y: Int, color: String) {

        update()

        context2d.lineWidth = 1
        context2d.strokeStyle = "#ff0000";
        context2d.beginPath();
        context2d.arc(
            x * h + h / 2,
            height - y * h - h / 2,
            h / 2 - 2,
            0,
            2 * 3.1415926535,
            false
        );
        context2d.closePath()
        context2d.stroke();
        context2d.fillStyle = color;
        context2d.fill();


    }

    override fun fillCell(x: Int, y: Int, color: String) {
        update()

        context2d.fillStyle = color
        context2d.strokeStyle = "#000000"
        context2d.beginPath()
        context2d.rect(x * h, (height - (y + 1) * h), h, h)
        context2d.closePath()
        context2d.fill()
    }


    override fun drawGrid() {

        update()

        val x0 = 0
        val y0 = 0
        val lineColor = "#baacc7"

        context2d.beginPath()
        for (offset in 0..height step this.h) {
            context2d.moveTo(0.5, offset + 0.5 + y0)
            context2d.lineTo(width + 0.5, offset + 0.5)
        }

        for (offset in 0..width step this.h) {
            context2d.moveTo(offset + 0.5 + x0, 0.5);
            context2d.lineTo(offset + 0.5 + x0, height + 0.5)
        }
        context2d.closePath()

        setLineStyle(lineWidth = 1, strokeStyle = lineColor)
        context2d.stroke();

    }

    fun setLineStyle(lineWidth: Int, strokeStyle: String) {
        context2d.lineWidth = lineWidth;
        context2d.strokeStyle = strokeStyle;
    }

    override fun clear() {
        context2d.clearRect(0, 0, width, height);
    }

    private fun update(){
        this.offsetX = scene.offsetX
        this.offsetY = scene.offsetY
        this.h = scene.h
    }
}

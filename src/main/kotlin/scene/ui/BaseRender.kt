package scene.ui

interface BaseRender {
    fun drawAutomaton(x: Int, y: Int, color: String)

    fun fillCell(x: Int, y: Int, color: String)

    fun drawGrid()

    fun clear()


}
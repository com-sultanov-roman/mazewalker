package scene

import automaton.AutomatonContextManager
import maze.core.ChessMaze

class Scene(private var maze: ChessMaze) {

    var h: Int = 14
        set(value) {
            if (value in 8..112){
                field = value
            }
        }

    var offsetX = 0
    var offsetY = 0

    var height = 784
    var weight = 784

    var running: Boolean = false

    private var automatonContextManager = AutomatonContextManager()

    fun getMaze(): ChessMaze = this.maze

    fun getAutomatonContextManager(): AutomatonContextManager = this.automatonContextManager
}
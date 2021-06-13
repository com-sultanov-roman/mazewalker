package automaton

interface Prepare {


    fun prepareInput(input: String): String {
        val inputCharacters = listOf(
            "N", "E", "S", "W",
            "ES", "ESW", "EW",
            "NE", "NES", "NESW",
            "NEW", "NS", "NSW",
            "NW", "WS"
        )

        var res: String = ""

        inputCharacters.forEach {
            if (equals(input, it)) {
                res = it
            }
        }

        if (res == "") TODO()

        return res
    }

    fun equals(cpr1: String, cpr2: String): Boolean {

        if (cpr1.length != cpr2.length) return false

        val charList1 = cpr1.split("")
        val charList2 = cpr2.split("")

        for (s in charList1) {
            if (!cpr2.contains(s.trim())) return false
        }

        for (s in charList2) {
            if (!cpr1.contains(s.trim())) return false
        }

        return true
    }
}
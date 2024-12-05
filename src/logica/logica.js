export const TURNOS = {
    X: "x",
    O: "o"
}

export const COMBOS_GANADORES = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export const checkearElGanador = (checkearPosicion) => {
    for (const combo of COMBOS_GANADORES) {
        const [a, b, c] = combo;

        // Si la posicion del tablero es [a] y es = [b] y [c], se devuelve la primera posicion para saber el ganador
        if (checkearPosicion[a] &&
            checkearPosicion[a] === checkearPosicion[b] &&
            checkearPosicion[a] === checkearPosicion[c]
        ) {
            return checkearPosicion[a];
        }
    }
    return null
}

export const chekearFinalDelJuego = (tablero) => {
    return tablero.every((cuadrado) => cuadrado !== null)
}
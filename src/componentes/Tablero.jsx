import confetti from "canvas-confetti";
import Cuadro from "./Cuadro";

const Tablero = ({tablero, setTablero, ganador, setGanador, turno, setTurno, TURNOS, checkearElGanador, chekearFinalDelJuego}) => {

    const actualizarTablero = (index) => {
        // Si hay algo en esta posision no se puede sobreescribir
        if (tablero[index] || ganador) return
        
        // Actualizar el tablero
        const nuevoTablero = [...tablero]
        nuevoTablero[index] = turno;
        setTablero(nuevoTablero);
    
        // Cambiar el turno
        const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X;
        setTurno(nuevoTurno)

        // Guardar en localStorage
        window.localStorage.setItem("tablero", JSON.stringify(nuevoTablero))
        window.localStorage.setItem("turno", JSON.stringify(nuevoTurno))
    
        //revisar si hay un ganador
        const nuevoGanador = checkearElGanador(nuevoTablero);
        if (nuevoGanador) {
          confetti()
          setGanador(nuevoGanador);
        } else if (chekearFinalDelJuego(nuevoTablero)){
          setGanador(false)
        }
      }
    
    return (
        <section className="game">
            {tablero.map((_, index) => (
                <Cuadro key={index} actualizarTablero={actualizarTablero} index={index}>
                    {tablero[index]}
                </Cuadro>
            ))}
        </section>
    );
}

export default Tablero;
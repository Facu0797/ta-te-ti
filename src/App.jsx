import './App.css'
import { useState } from 'react'
import { TURNOS } from './logica/logica';
import { checkearElGanador } from './logica/logica';
import { chekearFinalDelJuego } from './logica/logica';
import ModeloDelGanador from './componentes/ModeloDelGanador';
import Tablero from './componentes/Tablero';
import Turnos from './componentes/Turnos';

function App() {

  const [tablero, setTablero] = useState(() => {
    const tableroDelStorage = window.localStorage.getItem("tablero")
    return tableroDelStorage ? JSON.parse(tableroDelStorage) : Array(9).fill(null);
  });
  const [turno, setTurno] = useState(() => {
    const turnoDelStorage = window.localStorage.getItem("turno");
    return turnoDelStorage ? JSON.parse(turnoDelStorage) : TURNOS.X
  });
  const [ganador, setGanador] = useState(null);

  // Resetear el juego
  const handleResetearJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador(null)

    window.localStorage.removeItem("tablero");
    window.localStorage.removeItem("turno");
  }

  return (
    <main className="board">
      <h1>Ta Te Ti</h1>

      <button onClick={handleResetearJuego}>Resetear el juego</button>
      <Tablero tablero={tablero} setTablero={setTablero} ganador={ganador} setGanador={setGanador} turno={turno} setTurno={setTurno} TURNOS={TURNOS} checkearElGanador={checkearElGanador} chekearFinalDelJuego={chekearFinalDelJuego} />
      <Turnos turno={turno} TURNOS={TURNOS}/>
      <ModeloDelGanador ganador={ganador} handleResetearJuego={handleResetearJuego}/>
    </main>
  )
}

export default App

import Cuadro from "./Cuadro";

const ModeloDelGanador = ({handleResetearJuego, ganador}) => {
    if (ganador === null) return null

    const mostrarResultado = ganador === false ? "empate" : "Gano"

    return (
        <section className='winner'>
            <div className="text">
                <h2>{mostrarResultado}</h2>
                <header className='win'>
                    {ganador && <Cuadro>{ganador}</Cuadro>}
                </header>

                <footer>
                    <button onClick={handleResetearJuego}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}

export default ModeloDelGanador;
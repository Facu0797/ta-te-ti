import Cuadro from "./Cuadro";

const Turnos = ({turno, TURNOS}) => {
    return (
        <section className="turn">
            <Cuadro isSelected={turno === TURNOS.X}>
                {TURNOS.X}
            </Cuadro>
            <Cuadro isSelected={turno === TURNOS.O}>
                {TURNOS.O}
            </Cuadro>
        </section>
    );
}

export default Turnos;
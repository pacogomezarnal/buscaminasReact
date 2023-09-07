import './estilos.css'

export default function Celda({valor}){
    return(
        <button className="border border-2 border-dark-subtle fs-2 fw-bold text-primary" style={{width:50}}>
            {valor}
        </button>
    );
}
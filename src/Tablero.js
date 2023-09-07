import Celda from "./Celda";

export default function Tablero(){

    const valores=["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"];
    

    const celdas = valores.map((valor,index) => 
        <div className="col-auto p-0"  key={index}><Celda valor={valor}/></div>
    );

    return(
        <div className="d-flex flex-wrap justify-content-center" style={{width:270}}>
                {celdas}
        </div>
    );
}
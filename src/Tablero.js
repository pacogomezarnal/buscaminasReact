import { useState } from 'react';
import "./estilos.css";
import Celda from "./Celda";
import Tiempo from "./Tiempo";


export default function Tablero(){

    const [valores,setValores]=useState(Array(25).fill("0"));
    const mapaValores=["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"];
    
    const celdas = valores.map((valor,index) => 
        <div className="col-auto p-0" key={index}><Celda valor={valor} onCeldaClick={()=>mostrarNumero(index)}/></div>
    );

    function mostrarNumero(index){
        const valoresNuevos = valores.slice();
        valoresNuevos[index] = mapaValores[index];
        setValores(valoresNuevos);
    }


    return(
        <div className="container text-center"   style={{width:340}}>
            <div className="grid bg-body-secondary py-2 px-4 borderOutSide m-0">
                <div className="row bg-body-secondary borderInside ">
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className='lcdText text-danger pe-2 m-2 borderInsideS'>10</div>
                        <div className='align-self-center m-2 borderInsideS'><img src="acierto.png" style={{width:50}}></img></div>
                        <Tiempo/>
                    </div>
                </div>
                <div className="row borderInside bg-body-secondary text-center justify-content-center">
                    <div className="col my-1 p-0">
                        <div className="d-flex flex-wrap justify-content-center">
                                {celdas}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
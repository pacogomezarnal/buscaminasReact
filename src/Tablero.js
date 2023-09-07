import { useState } from 'react';
import Celda from "./Celda";

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
        <div className="d-flex flex-wrap justify-content-center" style={{width:270}}>
                {celdas}
        </div>
    );
}
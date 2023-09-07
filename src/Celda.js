import { useState } from 'react';
import './estilos.css'

export default function Celda({valor}){

        const [numero,setNumero]=useState(valor);
        const [activo,setActivo]=useState(false);


        function mostrarNumero() {
            console.log(numero);
            setActivo(true);
        }

        if(activo)
            if (numero==2) {
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-success" style={{width:50}}>
                        {numero}
                    </button>
                )
            }else if(numero==1){
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-primary" style={{width:50}}>
                        {numero}
                    </button>
                )
            }else if(numero==0){
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-primary" style={{width:50}}>
                        &nbsp;
                    </button>
                )            
            }else{
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-dark" style={{width:50}}>
                        {numero}
                    </button>
                )            
            }
        else{
            return(
                <button className="border border-2 border-dark-subtle fs-2 fw-bold text-primary" style={{width:50}} onClick={mostrarNumero}>
                    &nbsp;
                </button>
            )              
        }

}
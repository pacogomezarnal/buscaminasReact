import { useState } from 'react';
import './estilos.css'

export default function Celda({valor,onCeldaClick}){


            if (valor==2) {
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-success" style={{width:50}} onClick={onCeldaClick}>
                        {valor}
                    </button>
                )
            }else if(valor==1){
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-primary" style={{width:50}} onClick={onCeldaClick}>
                        {valor}
                    </button>
                )
            }else if(valor==0){
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-primary" style={{width:50}} onClick={onCeldaClick}>
                        &nbsp;
                    </button>
                )            
            }else{
                return(
                    <button className="border border-2 border-dark-subtle fs-2 fw-bold text-dark" style={{width:50}} onClick={onCeldaClick}>
                        {valor}
                    </button>
                )            
            }


}
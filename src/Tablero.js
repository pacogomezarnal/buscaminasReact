import Celda from "./Celda";

export default function Tablero(){
    const valores=["1","1","1","0","0","1","*","1","0","0","1","1","2","2","1","0","1","*","*","1","0","1","2","2","1"];
    const celdas = valores.map(valor => 
        <div className="col-auto p-0"><Celda valor={valor}/></div>
    );
    return(
        <div className="grid m-3">
            <div className="row justify-content-center">
                <div className="col-auto p-0"><Celda valor={valores[0]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[1]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[2]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[3]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[4]}/></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto p-0"><Celda valor={valores[5]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[6]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[7]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[8]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[9]}/></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto p-0"><Celda valor={valores[10]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[11]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[12]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[13]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[14]}/></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto p-0"><Celda valor={valores[15]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[16]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[17]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[18]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[19]}/></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto p-0"><Celda valor={valores[20]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[21]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[22]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[23]}/></div>
                <div className="col-auto p-0"><Celda valor={valores[24]}/></div>
            </div>
        </div>
    );
}
import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const sumar = (cont: number): void => {
        setContador(contador + cont);
    }
    
    return (
        <>
            <h1>Contador Valor: {contador}</h1>
            <button
                onClick={() => sumar(1)}
            >+1</button><span>  </span>
            <button
                onClick={() => sumar(-1)}
            >-1</button>
        </>
    )
}

export default Contador;


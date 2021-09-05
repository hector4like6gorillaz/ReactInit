import { useState } from 'react';
import GlobalButton from '../../GlobalComponents/GlobalButton';
import SkeletonArticle from '../../GlobalComponents/PreloaderContent/SkeletonArticle';
import PruebaMAcho from './Models/ejemplosModels';


const funciona = (): void => {
    console.log("funcionalslslslslsl");

}

const InicialState: PruebaMAcho = {
    uno: 12,
    dos: "doce",
    tres: false,
    cuatro: funciona,
    cinco: [2, 5, 6, 8, 10]
}
const Probanding = () => {

    const [ejemplos, setejemplos] = useState<PruebaMAcho>(InicialState);
    const { uno, dos, tres, cuatro, cinco } = ejemplos;
    const Uno = (number: number): void => {
        switch (number) {
            case 1:
                setejemplos({ ...ejemplos, uno: uno + 1 });
                break;
            case 2:
                setejemplos({ ...ejemplos, dos: "trece" });
                break;
            case 3:
                setejemplos({ ...ejemplos, tres: tres ? false : true });
                break;
            case 4:
                console.log("Caso 4 chavo");
                break;

            case 5:
                setejemplos({ ...ejemplos, cinco: [...cinco, uno] });
                break;
            default:
                break;
        }

    }
    return (
        <div>
            <p>{uno}</p>
            <p>{dos}</p>
            <p>{tres ? "si" : "no"}</p>
            <GlobalButton
                name="funcion"
                handleFunction={cuatro}
            />
            <p>{cinco.map((item, index) => {
                return (
                    <li key={index} >{item}</li>
                )
            })}</p>
            <GlobalButton
                name="Uno"
                handleFunction={() => Uno(1)}
            />
            <GlobalButton
                name="Dos"
                handleFunction={() => Uno(2)}
            />
            <GlobalButton
                name="Tres"
                handleFunction={() => Uno(3)}
            />
            <GlobalButton
                name="Cuatro"
                handleFunction={() => Uno(4)}
            />
            <GlobalButton
                name="Cinco"
                handleFunction={() => Uno(5)}
            />
            <code>
                <pre>
                    {JSON.stringify(InicialState, null, 2)}
                </pre>
            </code>
            

        </div>
    )
}

export default Probanding;

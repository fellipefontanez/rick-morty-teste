import { useContext } from "react";
import Tabela from "../../components/tabela";
import { Context } from "../../Routes";
import style from './index.css'

const Registros = () =>{
    const [lista] = useContext(Context);
    console.log(lista);
    return(
        <main className={style.main}>
            {lista ? (
                <Tabela data={lista} colunas={["id", "name", "species", "status"]} />
            ) : (
                <h1 className="style.texto">Sem registros</h1>
            )}
        </main>
    )
}
export default Registros;
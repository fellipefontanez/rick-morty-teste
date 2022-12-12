import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Routes";
import './index.css'
import axios from 'axios';

export default function Home (){
    const [lista, setLista] = useContext(Context);
    const navigate = useNavigate();

    function requestAPI(){
        axios("https://rickandmortyapi.com/api/character/", {method: 'get'})
        .then((res) =>  setLista(res.data.results))
        .finally(()=> navigate("/registros", {replace: false}))
        .catch((erro) => alert(`Houve um erro durante a requisição.\n Erro: ${erro.response.status}`));

    }

    return(
        <main className="main">
            <button className="botao" disabled={lista} onClick={requestAPI}>
                Request
            </button>
            <Link className="botao" to='/registros'>
                Registros
            </Link>
        </main>
    )
}

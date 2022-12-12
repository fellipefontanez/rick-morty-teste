import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registros from "./pages/Registros";

export const Context = React.createContext();


export default function AppRouter(){
    const [lista, setLista] = useState();

    return(
        <Context.Provider value={[lista, setLista]}>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registros" element={<Registros />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}
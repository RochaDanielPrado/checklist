import React from "react";
import { Routes, Route } from 'react-router-dom';

function BrowserRouter() {

    return (
        <Routes>

            <Route exact path="/">
                Pagina Incial
            </Route>

            <Route exact path="/config">
                Pagina Configuração
            </Route>

        </Routes>
    );
}

export default BrowserRouter;
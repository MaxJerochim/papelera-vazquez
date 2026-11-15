import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

// El resto de las páginas se descargan recién cuando se visitan
const Contact = lazy(() => import("./pages/Contact"));
const Materiales = lazy(() => import("./pages/Materiales/Materiales"));
const Servicios = lazy(() => import("./pages/Servicios/Servicios"));
const Empresa = lazy(() => import("./pages/Empresa"));
const Presupuesto = lazy(() => import("./pages/Presupuesto/Presupuesto"));

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/empresa"
                        element={<Empresa />}
                    />

                    <Route
                        path="/servicios"
                        element={<Servicios />}
                    />

                    <Route
                        path="/materiales"
                        element={<Materiales />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                    <Route
                        path="/presupuesto"
                        element={<Presupuesto />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Materiales from "./pages/Materiales/Materiales"
import Servicios from "./pages/Servicios/Servicios"
import Empresa from "./pages/Empresa"

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



                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default App;
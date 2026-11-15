import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const SITE = "Grupo Fibras";
const DEFAULT_TITLE = `${SITE} | Reciclaje de papel y cartón`;

// Título de la pestaña (y para Google) según la página
const PAGE_TITLES = {
    "/empresa": `Empresa | ${SITE}`,
    "/servicios": `Servicios | ${SITE}`,
    "/materiales": `Materiales | ${SITE}`,
    "/contact": `Contacto | ${SITE}`,
    "/presupuesto": `Presupuesto | ${SITE}`,
};

export default function MainLayout() {

    const { pathname, hash } = useLocation();

    // Al cambiar de página, vuelve arriba (salvo que el link apunte a una sección)
    useEffect(() => {
        if (!hash) window.scrollTo(0, 0);
    }, [pathname, hash]);

    useEffect(() => {
        document.title = PAGE_TITLES[pathname] || DEFAULT_TITLE;
    }, [pathname]);

    return (

        <>
            <Navbar />
            <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>

    );

}

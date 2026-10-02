import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {

    const { pathname, hash } = useLocation();

    // Al cambiar de página, vuelve arriba (salvo que el link apunte a una sección)
    useEffect(() => {
        if (!hash) window.scrollTo(0, 0);
    }, [pathname, hash]);

    return (

        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>

    );

}

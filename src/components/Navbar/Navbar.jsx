import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/157.png";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const lastScrollY = useRef(0);
    const inHero = useRef(true);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 80) {
                setHidden(false);

                lastScrollY.current = currentScrollY;

                return;
            }

            const scrollingDown =
                currentScrollY > lastScrollY.current;

            if (scrollingDown) {
                setHidden(true);
                setMenuOpen(false);
            } else {
                setHidden(!inHero.current);
            }

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        const heroEl = document.querySelector("#hero");

        let observer;

        if (heroEl) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    inHero.current = entry.isIntersecting;
                },
                {
                    threshold: 0,
                }
            );

            observer.observe(heroEl);
        } else {
            // Si la página no tiene Hero (ej: Gallery),
            // permitimos que el navbar aparezca al subir.
            inHero.current = true;
        }

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    // Bloquea el scroll del body mientras el menú mobile está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    // Cierra el menú mobile si el usuario agranda la ventana a desktop
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1000) {
                setMenuOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={`navbar ${
                hidden ? "navbar-hidden" : ""
            } ${menuOpen ? "menu-active" : ""}`}
        >
            <div className="navbar-container">

                {/* ==================== LOGO ==================== */}

                <div className="logo-wrapper">
                    <NavLink to="/" onClick={closeMenu}>
                        <img
                            src={logo}
                            alt="Logo empresa"
                        />
                    </NavLink>
                </div>


                {/* ==================== NAVEGACIÓN DESKTOP ==================== */}

                <nav className="nav-links">

                    <NavLink to="/">
                        Inicio
                    </NavLink>

                    <NavLink to="/empresa">
                        Empresa
                    </NavLink>

                    <NavLink to="/servicios">
                        Servicios
                    </NavLink>

                    <NavLink to="/materiales">
                        Materiales
                    </NavLink>

                    <NavLink to="/contact">
                        Contacto
                    </NavLink>

                </nav>


                {/* ==================== PRESUPUESTO (DESKTOP) ==================== */}

                <button className="nav-button">
                    Pedir presupuesto

                    <span>→</span>
                </button>


                {/* ==================== HAMBURGUESA (MOBILE) ==================== */}

                <button
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Abrir menú"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>


            {/* ==================== MENÚ MOBILE ==================== */}

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

                <nav className="mobile-nav-links">

                    <NavLink to="/" onClick={closeMenu}>
                        Inicio
                    </NavLink>

                    <NavLink to="/empresa" onClick={closeMenu}>
                        Empresa
                    </NavLink>

                    <NavLink to="/servicios" onClick={closeMenu}>
                        Servicios
                    </NavLink>

                    <NavLink to="/materiales" onClick={closeMenu}>
                        Materiales
                    </NavLink>

                    <NavLink to="/contact" onClick={closeMenu}>
                        Contacto
                    </NavLink>

                </nav>

                <button className="nav-button mobile-nav-button" onClick={closeMenu}>
                    Pedir presupuesto

                    <span>→</span>
                </button>

            </div>

        </header>
    );
}
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/logo_transparente.png";

export default function Navbar() {

    const [hidden, setHidden] = useState(false);

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

            const scrollingDown = currentScrollY > lastScrollY.current;

            if (scrollingDown) {

                setHidden(true);

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

            window.removeEventListener("scroll", handleScroll);

            if (observer) observer.disconnect();

        };

    }, []);

    return (

        <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>

            <div className="navbar-container">

                <div className="logo-wrapper">

                    <NavLink to="/">

                        <img
                            src={logo}
                            alt="Logo empresa"
                        />

                    </NavLink>

                </div>

                <nav className="nav-links">

                    <NavLink to="/">
                        Inicio
                    </NavLink>

                    <NavLink to="/">
                        Empresa
                    </NavLink>

                    <NavLink to="/gallery">
                        Galería
                    </NavLink>

                    <NavLink to="/">
                        Contacto
                    </NavLink>

                </nav>

                <button className="nav-button">

                    Pedir presupuesto

                    <span>→</span>

                </button>

            </div>

        </header>

    );

}
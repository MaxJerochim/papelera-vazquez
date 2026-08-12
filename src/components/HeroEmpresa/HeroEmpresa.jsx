import "./HeroEmpresa.css";

export default function HeroEmpresa() {
    return (
        <section className="hero-empresa">

            {/* =================================================
                IMAGEN PRINCIPAL
            ================================================= */}

            <div className="hero-empresa-image">

                <img
                    src="/images/REDES GFIBRAS2026/10.webp"
                    alt="Grupo Fibras - Industria papelera"
                />

                <div className="hero-empresa-image-overlay"></div>

            </div>


            {/* =================================================
                CONTENIDO
            ================================================= */}

            <div className="hero-empresa-content">

                <div className="hero-empresa-top">

                    <span className="hero-empresa-brand">
                        GRUPO FIBRAS
                    </span>

                    <span className="hero-empresa-location">
                        INDUSTRIA ARGENTINA
                    </span>

                </div>


                <div className="hero-empresa-main">

                    <div className="hero-empresa-eyebrow">

                        <span></span>

                        NUESTRA EMPRESA

                    </div>


                    <h1>
                        Más de
                        <strong> 40 años </strong>
                        transformando
                        residuos.
                    </h1>


                    <p>
                        Somos una empresa dedicada a la recuperación,
                        transformación y comercialización de papel y
                        cartón, combinando experiencia industrial,
                        innovación y compromiso ambiental.
                    </p>


                    <a
                        href="#nosotros"
                        className="hero-empresa-button"
                    >
                        Conocé nuestra historia

                        <span>↗</span>
                    </a>

                </div>


                {/* =================================================
                    BLOQUE AZUL
                ================================================= */}

                <div className="hero-empresa-blue-card">

                    <span className="hero-empresa-blue-number">
                        01
                    </span>

                    <div className="hero-empresa-blue-line"></div>

                    <div className="hero-empresa-blue-content">

                        <span>
                            DESDE 1985
                        </span>

                        <strong>
                            Industria · Recuperación · Reciclaje
                        </strong>

                    </div>

                </div>


                {/* =================================================
                    INFORMACIÓN INFERIOR
                ================================================= */}

                <div className="hero-empresa-footer">

                    <div className="hero-empresa-footer-item">

                        <strong>
                            40+
                        </strong>

                        <span>
                            años de experiencia
                        </span>

                    </div>


                    <div className="hero-empresa-footer-separator"></div>


                    <div className="hero-empresa-footer-item">

                        <strong>
                            1985
                        </strong>

                        <span>
                            nuestros comienzos
                        </span>

                    </div>


                    <div className="hero-empresa-footer-separator"></div>


                    <div className="hero-empresa-footer-item">

                        <strong>
                            GF
                        </strong>

                        <span>
                            Grupo Fibras
                        </span>

                    </div>

                </div>

            </div>


            {/* =================================================
                NUMERO DECORATIVO
            ================================================= */}

            <div className="hero-empresa-large-number">
                01
            </div>


            {/* =================================================
                SCROLL
            ================================================= */}

            <div className="hero-empresa-scroll">

                <span></span>

                <p>
                    SCROLL
                </p>

            </div>

        </section>
    );
}
import "./Hero.css";

export default function Hero(){

    return(

        <section className="hero" id="hero">

            <div className="hero-background">
                <div className="glow glow-one"></div>
                <div className="glow glow-two"></div>
            </div>


            <div className="hero-content">


                <div className="hero-text">

                    <div className="hero-tag">
                        <span></span>
                        Industria papelera desde 1985
                    </div>


                    <h1>
                        Transformamos papel
                        <strong>
                            en soluciones óptimas
                        </strong>
                        para la industria
                    </h1>


                    <p>
                        Diseñamos y fabricamos productos de papel
                        con tecnología, calidad y compromiso ambiental
                        para empresas que buscan crecer.
                    </p>


                    <div className="hero-buttons">

                        <button className="primary-btn">
                            Ver productos
                            <span>→</span>
                        </button>


                        <button className="secondary-btn">
                            Conocé nuestra empresa
                        </button>

                    </div>


                    <div className="hero-stats">

                        <div>
                            <h3>40+</h3>
                            <p>Años de experiencia</p>
                        </div>

                        <div>
                            <h3>500+</h3>
                            <p>Clientes satisfechos</p>
                        </div>

                        <div>
                            <h3>99%</h3>
                            <p>Calidad garantizada</p>
                        </div>

                    </div>


                </div>



                <div className="hero-visual">


                    <div className="image-container">

                        <img 
                          src="/images/REDES GFIBRAS2026/128.webp"
                          alt="Producto papelero"
                        />

                    </div>


                    <div className="floating-card">

                        <div className="icon">
                            ✓
                        </div>

                        <div>
                            <strong>
                                Producción sostenible
                            </strong>

                            <p>
                                Procesos responsables
                            </p>
                        </div>

                    </div>


                </div>


            </div>


        </section>

    )

}
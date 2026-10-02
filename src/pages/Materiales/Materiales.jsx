import "./Materiales.css";
import data from "./materiales.data.json";
import { whatsappLink } from "../../data/contacto";

export default function Materiales() {

    const {
        hero,
        whatsapp,
        sectionHeader,
        materiales
    } = data;

    const buildWhatsAppLink = (materialName) => {

        const text = whatsapp.messageTemplate.replace(
            "{material}",
            materialName
        );

        return whatsappLink(text);

    };

    const scrollToGrid = () => {

        document
            .getElementById("materiales-grid")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    };

    return (

        <div className="materiales-page">

            {/* =====================
                HERO
            ===================== */}

            <section className="mp-hero">

                <div
                    className="mp-hero-blobs"
                    aria-hidden="true"
                >

                    <span className="mp-blob mp-blob-1"></span>

                    <span className="mp-blob mp-blob-2"></span>

                    <span className="mp-blob mp-blob-3"></span>

                    <span className="mp-blob mp-blob-4"></span>

                </div>

                <div className="mp-hero-inner">

                    <div className="mp-eyebrow">

                        <span></span>

                        {hero.eyebrow}

                    </div>

                    <h1 className="mp-heading">

                        {hero.headingLines.map((line, i) => (

                            <span
                                key={i}
                                className={
                                    line.accent
                                        ? "mp-line mp-line-accent"
                                        : "mp-line"
                                }
                            >
                                {line.text}
                            </span>

                        ))}

                    </h1>

                    <p className="mp-subheading">
                        {hero.subheading}
                    </p>

                    <button
                        type="button"
                        className="mp-scroll-cue"
                        onClick={scrollToGrid}
                    >

                        {hero.scrollLabel}

                        <span className="mp-scroll-arrow">
                            ↓
                        </span>

                    </button>

                </div>

            </section>


            {/* =====================
                MATERIALS
            ===================== */}

            <section
                className="mp-materials"
                id="materiales-grid"
            >

                <div className="mp-materials-inner">

                    {/* HEADER */}

                    <div className="mp-section-header">

                        <div className="mp-eyebrow mp-eyebrow-dark">

                            <span></span>

                            {sectionHeader.eyebrow}

                        </div>

                        <h2>
                            {sectionHeader.title}
                        </h2>

                        <p>
                            {sectionHeader.subtitle}
                        </p>

                    </div>


                    {/* GRID */}

                    <div className="mp-grid">

                        {materiales.map((material, i) => (

                            <article
                                className="mp-card"
                                key={material.id}
                                style={{
                                    animationDelay: `${i * 80}ms`
                                }}
                            >

                                {/* IMAGEN */}

                                <div className="mp-card-image">

                                    <div className="mp-card-image-inner">

                                        <img
                                            src={material.image}
                                            alt={material.alt}
                                            loading="lazy"
                                            onError={(event) => {
                                                event.currentTarget.style.display = "none";
                                            }}
                                        />

                                    </div>

                                </div>


                                {/* CONTENIDO */}

                                <div className="mp-card-content">

                                    <span className="mp-card-number">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <h3>
                                        {material.name}
                                    </h3>

                                    <div className="mp-card-line"></div>

                                    <a
                                        className="mp-btn"
                                        href={buildWhatsAppLink(material.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >

                                        <svg
                                            className="mp-btn-icon"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >

                                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.24-.27.53-.34.71-.34h.5c.16 0 .38-.02.58.45.24.57.8 1.99.87 2.13.07.14.11.3.02.48-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.13.44.2.5.31.07.13.07.7-.17 1.38z" />

                                        </svg>

                                        Consultar precio

                                    </a>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

        </div>

    );
}
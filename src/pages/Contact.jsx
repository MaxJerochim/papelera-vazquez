import "./Contact.css";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowRight
} from "react-icons/fa";

export default function ContactPage() {

    return (

        <section className="contact-page">

            <div className="container">

                <header className="contact-header">

                    <span className="contact-eyebrow">
                        Contacto
                    </span>

                    <h1 className="contact-title">
                        Hablemos de tu próximo proyecto
                    </h1>

                    <p className="contact-subtitle">
                        Nuestro equipo está preparado para asesorarte y responder cualquier consulta sobre nuestros productos y servicios.
                    </p>

                </header>

                {/* ================= FORMULARIO ================= */}

                <div className="contact-form-wrapper">

                    <form className="contact-form">

                        <div className="form-group">

                            <label htmlFor="name">
                                Nombre
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Tu nombre"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="tu@email.com"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="message">
                                Mensaje
                            </label>

                            <textarea
                                id="message"
                                rows="7"
                                placeholder="Escribí tu mensaje..."
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="contact-submit"
                        >

                            Enviar mensaje

                            <FaArrowRight />

                        </button>

                    </form>

                </div>

                {/* ================= TARJETAS ================= */}

                <div className="contact-cards">

                    {/* DIRECCIÓN */}

                    <a
                        href="https://maps.google.com/?q=Grupo+Fibras+Avellaneda+S.A."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >

                        <div className="card-icon">

                            <FaMapMarkerAlt />

                        </div>

                        <h3>
                            Dirección
                        </h3>

                        <p>
                            Grupo Fibras Avellaneda S.A.
                        </p>

                        <span>
                            Gral. Deheza 684
                        </span>

                    </a>

                    {/* TELÉFONO */}

                    <a
                        href="https://wa.me/5491123601134"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >

                        <div className="card-icon">

                            <FaPhoneAlt />

                        </div>

                        <h3>
                            Teléfono
                        </h3>

                        <p>
                            +54 9 11 2360-1134
                        </p>

                        <span>
                            Lunes a Viernes
                        </span>

                    </a>

                    {/* EMAIL */}

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=Fibrasavellaneda@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >

                        <div className="card-icon">

                            <FaEnvelope />

                        </div>

                        <h3>
                            Email
                        </h3>

                        <p>
                            Fibrasavellaneda@gmail.com
                        </p>

                        <span>
                            Respondemos a la brevedad
                        </span>

                    </a>

                </div>

                {/* ================= MAPA ================= */}

                <div className="map-wrapper">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.890648298515!2d-58.366791323388256!3d-34.70793796301137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33327ff5b1653%3A0x3026239afff473f9!2sGrupo%20Fibras%20Avellaneda%20S.A.!5e0!3m2!1ses-419!2sar!4v1783688876794!5m2!1ses-419!2sar"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Grupo Fibras"
                    />

                    <a
                        href="https://maps.google.com/?q=Grupo+Fibras+Avellaneda+S.A."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="maps-button"
                    >

                        Abrir en Google Maps

                        <FaArrowRight />

                    </a>

                </div>

            </div>

        </section>

    );

}
import { useState } from "react";
import "./Contact.css";

import {
    FaMapMarkerAlt,
    FaWhatsapp,
    FaEnvelope,
    FaArrowRight
} from "react-icons/fa";

import { EMAIL, PHONE_DISPLAY, openWhatsApp, whatsappLink } from "../data/contacto";

export default function ContactPage() {

    const [form, setForm] = useState({ name: "", company: "", message: "" });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const lines = [
            `Hola! Soy ${form.name.trim()}${form.company.trim() ? ` de ${form.company.trim()}` : ""}.`,
            "",
            form.message.trim()
        ];

        openWhatsApp(lines.join("\n"));
    };

    return (
        <>

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

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label htmlFor="name">
                                Nombre
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Tu nombre"
                                autoComplete="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="company">
                                Empresa <span className="form-optional">(opcional)</span>
                            </label>

                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Nombre de tu empresa"
                                autoComplete="organization"
                                value={form.company}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="message">
                                Mensaje
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                placeholder="Escribí tu mensaje..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="contact-submit"
                        >

                            <FaWhatsapp />

                            Enviar por WhatsApp

                        </button>

                        <p className="contact-form-note">
                            Se abrirá WhatsApp con tu mensaje listo para enviar.
                        </p>

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
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >

                        <div className="card-icon">

                            <FaWhatsapp />

                        </div>

                        <h3>
                            WhatsApp
                        </h3>

                        <p>
                            {PHONE_DISPLAY}
                        </p>

                        <span>
                            Lunes a viernes
                        </span>

                    </a>

                    {/* EMAIL */}

                    <a
                        href={`mailto:${EMAIL}`}
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
                            {EMAIL}
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

        </>

    );

}
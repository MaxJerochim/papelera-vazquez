import { useState } from "react";
import { FaTruck, FaWarehouse, FaWhatsapp, FaCheck } from "react-icons/fa";

import "./Presupuesto.css";
import materialesData from "../Materiales/materiales.data.json";
import { ADDRESS, openWhatsApp } from "../../data/contacto";

const MODALIDADES = [
    {
        id: "retiro",
        icon: FaTruck,
        title: "Retiro",
        subtitle: "Pasamos a buscar el material",
        description: "Coordinamos el día y vamos con nuestra flota a tu empresa, depósito o domicilio."
    },
    {
        id: "entrega",
        icon: FaWarehouse,
        title: "Entrega",
        subtitle: "Lo traés a nuestra planta",
        description: `Acercás el material a ${ADDRESS}. Lo pesamos en el momento con balanza propia.`
    }
];

const CANTIDADES = [
    "Menos de 100 kg",
    "100 a 500 kg",
    "500 kg a 1 tonelada",
    "Más de 1 tonelada",
    "No sé / a definir"
];

export default function Presupuesto() {

    const { materiales } = materialesData;

    const [modalidad, setModalidad] = useState(null);
    const [seleccionados, setSeleccionados] = useState([]);
    const [cantidad, setCantidad] = useState("");
    const [nombre, setNombre] = useState("");
    const [zona, setZona] = useState("");
    const [comentario, setComentario] = useState("");
    const [intentoEnviar, setIntentoEnviar] = useState(false);

    const toggleMaterial = (name) => {
        setSeleccionados((prev) =>
            prev.includes(name)
                ? prev.filter((m) => m !== name)
                : [...prev, name]
        );
    };

    const listo = modalidad && seleccionados.length > 0;
    const modalidadElegida = MODALIDADES.find((m) => m.id === modalidad);

    const enviar = (e) => {
        e.preventDefault();
        setIntentoEnviar(true);
        if (!listo) return;

        const lineas = [
            "Hola! Quiero pedir un presupuesto.",
            "",
            `• Modalidad: ${modalidadElegida.title} (${modalidadElegida.subtitle.toLowerCase()})`,
            `• Materiales: ${seleccionados.join(", ")}`
        ];

        if (cantidad) lineas.push(`• Cantidad aproximada: ${cantidad}`);
        if (modalidad === "retiro" && zona.trim()) lineas.push(`• Zona / dirección de retiro: ${zona.trim()}`);
        if (nombre.trim()) lineas.push(`• Nombre / empresa: ${nombre.trim()}`);
        if (comentario.trim()) lineas.push("", comentario.trim());

        lineas.push("", "¿Me pasan el precio y coordinamos?");

        openWhatsApp(lineas.join("\n"));
    };

    return (

        <div className="presupuesto-page">

            <header className="pp-hero">

                <div className="pp-hero-inner">

                    <span className="pp-eyebrow">
                        <span></span>
                        Pedir presupuesto
                    </span>

                    <h1>
                        Contanos qué material tenés
                        <strong> y te pasamos el precio.</strong>
                    </h1>

                    <p>
                        Elegí si preferís que lo retiremos o traerlo a la planta,
                        marcá los materiales y te contactamos por WhatsApp para
                        pasarte el precio del día y coordinar.
                    </p>

                </div>

            </header>

            <form className="pp-body" onSubmit={enviar} noValidate>

                <div className="pp-steps">

                    {/* ============ PASO 1 ============ */}

                    <section className="pp-step">

                        <div className="pp-step-head">
                            <span className="pp-step-num">1</span>
                            <div>
                                <h2>¿Retiro o entrega?</h2>
                                <p>Elegí cómo preferís trabajar.</p>
                            </div>
                        </div>

                        <div className="pp-modes" role="radiogroup" aria-label="Retiro o entrega">

                            {MODALIDADES.map((m) => {

                                const Icon = m.icon;
                                const activo = modalidad === m.id;

                                return (

                                    <button
                                        key={m.id}
                                        type="button"
                                        role="radio"
                                        aria-checked={activo}
                                        className={`pp-mode ${activo ? "is-active" : ""}`}
                                        onClick={() => setModalidad(m.id)}
                                    >

                                        <span className="pp-mode-check">
                                            <FaCheck />
                                        </span>

                                        <span className="pp-mode-icon">
                                            <Icon />
                                        </span>

                                        <strong>{m.title}</strong>
                                        <span className="pp-mode-sub">{m.subtitle}</span>
                                        <span className="pp-mode-desc">{m.description}</span>

                                    </button>

                                );

                            })}

                        </div>

                        {intentoEnviar && !modalidad && (
                            <p className="pp-error">Elegí retiro o entrega para continuar.</p>
                        )}

                    </section>

                    {/* ============ PASO 2 ============ */}

                    <section className="pp-step">

                        <div className="pp-step-head">
                            <span className="pp-step-num">2</span>
                            <div>
                                <h2>¿Qué materiales tenés?</h2>
                                <p>Podés marcar más de uno.</p>
                            </div>
                        </div>

                        <div className="pp-materials">

                            {materiales.map((mat) => {

                                const activo = seleccionados.includes(mat.name);

                                return (

                                    <button
                                        key={mat.id}
                                        type="button"
                                        aria-pressed={activo}
                                        className={`pp-material ${activo ? "is-active" : ""}`}
                                        onClick={() => toggleMaterial(mat.name)}
                                    >

                                        <span className="pp-material-img">
                                            <img src={mat.image} alt="" loading="lazy" />
                                            <span className="pp-material-check">
                                                <FaCheck />
                                            </span>
                                        </span>

                                        <span className="pp-material-name">{mat.name}</span>

                                    </button>

                                );

                            })}

                        </div>

                        {intentoEnviar && seleccionados.length === 0 && (
                            <p className="pp-error">Marcá al menos un material.</p>
                        )}

                    </section>

                    {/* ============ PASO 3 ============ */}

                    <section className="pp-step">

                        <div className="pp-step-head">
                            <span className="pp-step-num">3</span>
                            <div>
                                <h2>Algunos datos más <em>(opcional)</em></h2>
                                <p>Nos ayudan a darte un precio más preciso.</p>
                            </div>
                        </div>

                        <div className="pp-fields">

                            <div className="pp-field pp-field-full">

                                <span className="pp-label">Cantidad aproximada</span>

                                <div className="pp-chips">

                                    {CANTIDADES.map((c) => (

                                        <button
                                            key={c}
                                            type="button"
                                            aria-pressed={cantidad === c}
                                            className={`pp-chip ${cantidad === c ? "is-active" : ""}`}
                                            onClick={() => setCantidad(cantidad === c ? "" : c)}
                                        >
                                            {c}
                                        </button>

                                    ))}

                                </div>

                            </div>

                            <label className="pp-field">

                                <span className="pp-label">Nombre o empresa</span>

                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Ej: Imprenta López"
                                    autoComplete="organization"
                                />

                            </label>

                            {modalidad === "retiro" && (

                                <label className="pp-field">

                                    <span className="pp-label">Zona o dirección de retiro</span>

                                    <input
                                        type="text"
                                        value={zona}
                                        onChange={(e) => setZona(e.target.value)}
                                        placeholder="Ej: Lanús, Av. Hipólito Yrigoyen 4500"
                                        autoComplete="street-address"
                                    />

                                </label>

                            )}

                            <label className="pp-field pp-field-full">

                                <span className="pp-label">Comentario</span>

                                <textarea
                                    rows="3"
                                    value={comentario}
                                    onChange={(e) => setComentario(e.target.value)}
                                    placeholder="Ej: el material está embolsado, hay que retirarlo de un primer piso, etc."
                                />

                            </label>

                        </div>

                    </section>

                </div>

                {/* ============ RESUMEN ============ */}

                <aside className="pp-summary">

                    <h3>Tu pedido</h3>

                    <dl>

                        <div>
                            <dt>Modalidad</dt>
                            <dd>{modalidadElegida ? modalidadElegida.title : <span className="pp-empty">Sin elegir</span>}</dd>
                        </div>

                        <div>
                            <dt>Materiales</dt>
                            <dd>
                                {seleccionados.length
                                    ? seleccionados.join(", ")
                                    : <span className="pp-empty">Ninguno todavía</span>}
                            </dd>
                        </div>

                        {cantidad && (
                            <div>
                                <dt>Cantidad</dt>
                                <dd>{cantidad}</dd>
                            </div>
                        )}

                    </dl>

                    <button
                        type="submit"
                        className={`pp-submit ${listo ? "" : "is-disabled"}`}
                        aria-disabled={!listo}
                    >
                        <FaWhatsapp />
                        Consultar precio por WhatsApp
                    </button>

                    <p className="pp-note">
                        Se abre WhatsApp con tu pedido listo para enviar.
                        Te respondemos con el precio del día y coordinamos.
                    </p>

                </aside>

            </form>

        </div>

    );

}

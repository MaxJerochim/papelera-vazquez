import "./SolucionesEmpresas.css";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "../../data/contacto";
import data from "./soluciones.data.json";

export default function SolucionesEmpresas(){

    const navigate = useNavigate();

    const handleClick = (btn) => {
        if (btn.whatsapp) openWhatsApp("Hola! Quiero hacer una consulta sobre sus servicios.");
        else if (btn.to) navigate(btn.to);
    };

    const { eyebrow, title, paragraphs, buttons, features } = data;

    return(

        <section className="soluciones-empresas" id="soluciones">

            <div className="soluciones-inner">

                <div className="soluciones-text">

                    <div className="soluciones-eyebrow">
                        <span></span>
                        {eyebrow}
                    </div>

                    <h2>{title}</h2>

                    {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <div className="soluciones-buttons">

                        {buttons.map((btn, i) => (

                            <button
                                key={i}
                                onClick={() => handleClick(btn)}
                                className={
                                    btn.variant === "primary"
                                        ? "sol-btn-primary"
                                        : "sol-btn-secondary"
                                }
                            >
                                {btn.label}
                            </button>

                        ))}

                    </div>

                </div>


                <div className="soluciones-features">

                    {features.map((feature, i) => (

                        <div className="soluciones-feature-card" key={i}>

                            <h4>{feature.title}</h4>

                            <p>{feature.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}
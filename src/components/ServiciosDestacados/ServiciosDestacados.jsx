import "./ServiciosDestacados.css";
import data from "./servicios-destacados.data.json";

export default function ServiciosDestacados(){

    const { eyebrow, title, subtitle, items } = data;

    return(

        <section className="servicios-destacados" id="lo-que-ofrecemos">

            <div className="sd-inner">

                <div className="sd-header">

                    <div className="sd-eyebrow">
                        <span></span>
                        {eyebrow}
                    </div>

                    <h2>{title}</h2>

                    <p>{subtitle}</p>

                </div>


                <div className="sd-bento">

                    {items.map((item, i) => (

                        <div
                            className={
                                item.large
                                    ? "sd-card sd-card-large"
                                    : "sd-card"
                            }
                            key={i}
                        >

                            <div className="sd-image">
                                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                                <div className="sd-overlay"></div>
                            </div>

                            <div className="sd-body">

                                <span className="sd-tag">
                                    {item.tag}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                                <span className="sd-link">
                                    Conocer más
                                    <i>→</i>
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}
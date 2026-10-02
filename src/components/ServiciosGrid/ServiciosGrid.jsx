import "./ServiciosGrid.css";
import data from "./servicios.data.json";

export default function ServiciosGrid(){

    const { eyebrow, title, subtitle, sectionLabel, items } = data;

    return(

        <section className="servicios-grid" id="servicios">

            <div className="servicios-inner">

                <div className="servicios-header">

                    <div className="servicios-eyebrow">
                        <span></span>
                        {eyebrow}
                    </div>

                    <h2>{title}</h2>

                    <p>{subtitle}</p>

                </div>


                <div className="servicios-section-label">
                    {sectionLabel}
                </div>


                <div className="servicios-cards">

                    {items.map((item, i) => (

                        <div className="servicio-card" key={i}>

                            <div className="servicio-image">
                                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                            </div>

                            <div className="servicio-body">

                                <span className="servicio-tag">
                                    {item.tag}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}
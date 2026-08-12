import "./ProcesoDestacado.css";
import data from "./proceso.data.json";

export default function ProcesoDestacado(){

    const { sectionLabel, featured, checklist } = data;

    return(

        <section className="proceso-destacado" id="clasificacion">

            <div className="proceso-inner">

                <div className="proceso-label">
                    {sectionLabel}
                </div>


                <div className="proceso-grid">

                    <div className="proceso-featured">

                        <h3>{featured.value}</h3>

                        <p className="proceso-value-label">
                            {featured.valueLabel}
                        </p>

                        {featured.paragraphs.map((p, i) => (
                            <p key={i} className="proceso-paragraph">
                                {p}
                            </p>
                        ))}

                    </div>


                    <div className="proceso-checklist">

                        {checklist.map((item, i) => (

                            <div className="proceso-item" key={i}>

                                <div className="proceso-icon">
                                    {item.icon}
                                </div>

                                <div>
                                    <strong>{item.title}</strong>
                                    <p>{item.description}</p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    )

}
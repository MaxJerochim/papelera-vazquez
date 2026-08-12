import "./PublicosSegmentos.css";
import data from "./publico-segmentos.data.json";

export default function PublicoSegmentos(){

    const { eyebrow, quote, stat, segments } = data;

    return(

        <section className="publico-segmentos" id="a-quien-ayudamos">

            <div className="ps-inner">

                <div className="ps-side">

                    <div className="ps-eyebrow">
                        <span></span>
                        {eyebrow}
                    </div>

                    <p className="ps-quote">
                        “{quote}”
                    </p>

                    <div className="ps-stat">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>

                </div>


                <div className="ps-grid">

                    {segments.map((seg, i) => (

                        <div className="ps-card" key={i}>

                            <div className="ps-letter">
                                {seg.letter}
                            </div>

                            <h4>{seg.name}</h4>

                            <p>{seg.desc}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}
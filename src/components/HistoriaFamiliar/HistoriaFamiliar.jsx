import "./HistoriaFamiliar.css";
import data from "./historia.data.json";

export default function HistoriaFamiliar(){

    const { eyebrow, title, lead, paragraphs, image, badge, timeline } = data;

    return(

        <section className="historia-familiar" id="historia">

            <div className="historia-inner">

                <div className="historia-top">

                    <div className="historia-text">

                        <div className="historia-eyebrow">
                            <span></span>
                            {eyebrow}
                        </div>

                        <h2>{title}</h2>

                        <p className="historia-lead">{lead}</p>

                        {paragraphs.map((p, i) => (
                            <p key={i} className="historia-paragraph">
                                {p}
                            </p>
                        ))}

                    </div>


                    <div className="historia-visual">

                        <div className="historia-image">
                            <img src={image.src} alt={image.alt} />
                        </div>

                        <div className="historia-badge">
                            <h3>{badge.value}</h3>
                            <p>{badge.label}</p>
                        </div>

                    </div>

                </div>


                <div className="historia-timeline">

                    {timeline.map((item, i) => (

                        <div className="historia-timeline-item" key={i}>

                            <div className="historia-dot"></div>

                            <span className="historia-gen">
                                {item.gen}
                            </span>

                            <p>{item.desc}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}
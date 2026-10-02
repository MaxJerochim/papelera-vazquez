import "./AboutPapelera.css";
import data from "./about.data.json";

export default function AboutPapelera(){

    const { eyebrow, heading, paragraphs, image, stats } = data;

    return(

        <section className="about-papelera" id="nosotros">

            <div className="about-inner">

                <div className="about-top">

                    <div className="about-text">

                        <div className="about-eyebrow">
                            <span></span>
                            {eyebrow}
                        </div>

                        <h2>{heading}</h2>

                        <div className="about-image">
                            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                        </div>

                    </div>


                    <div className="about-paragraphs">

                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}

                    </div>

                </div>


                <div className="about-stats">

                    {stats.map((stat, i) => (

                        <div className="about-stat-card" key={i}>
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}
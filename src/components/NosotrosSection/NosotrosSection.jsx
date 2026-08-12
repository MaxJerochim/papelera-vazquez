import "./NosotrosSection.css";
import data from "./nosotros.data.json";

export default function NosotrosSection(){

    const { eyebrow, title, paragraphs, image, stats, featuredCard } = data;

    return(

        <section className="nosotros-section" id="nosotros">

            <div className="nosotros-inner">

                <div className="nosotros-eyebrow">
                    <span></span>
                    {eyebrow}
                </div>


                <div className="nosotros-top">

                    <div className="nosotros-left">

                        <h2>{title}</h2>

                        <div className="nosotros-image">
                            <img src={image.src} alt={image.alt} />
                        </div>

                    </div>


                    <div className="nosotros-right">

                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}

                    </div>

                </div>


                <div className="nosotros-stats">

                    {stats.map((stat, i) => (

                        <div className="nosotros-stat-card" key={i}>
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>

                    ))}

                </div>


                <div className="nosotros-featured">

                    <div className="nosotros-featured-image">
                        <img src={featuredCard.image} alt={featuredCard.title} />
                    </div>

                    <div className="nosotros-featured-body">

                        <h4>{featuredCard.title}</h4>

                        <p>{featuredCard.description}</p>

                    </div>

                </div>

            </div>

        </section>

    )

}
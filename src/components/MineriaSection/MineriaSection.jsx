import "./MineriaSection.css";
import data from "./mineria.data.json";

export default function MineriaSection(){

    const { eyebrow, title, paragraphs, buttons, cards } = data;

    return(

        <section className="mineria-section" id="mineria">

            <div className="mineria-inner">

                <div className="mineria-eyebrow">
                    <span></span>
                    {eyebrow}
                </div>

                <h2>{title}</h2>


                <div className="mineria-grid">

                    <div className="mineria-text">

                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}

                        <div className="mineria-buttons">

                            {buttons.map((btn, i) => (

                                <button
                                    key={i}
                                    className={
                                        btn.variant === "primary"
                                            ? "mineria-btn-primary"
                                            : "mineria-btn-secondary"
                                    }
                                >
                                    {btn.label}
                                </button>

                            ))}

                        </div>

                    </div>


                    <div className="mineria-cards">

                        {cards.map((card, i) => (

                            <div className="mineria-card" key={i}>
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    )

}
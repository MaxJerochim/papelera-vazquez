import "./InfoSection.css";

export default function InfoSection({ data }) {

    return (

        <section className="info-section">

            {/* Background */}

            <div className="info-background">

                <div className="info-glow glow-left"></div>

                <div className="info-glow glow-right"></div>

                <div className="grid-pattern"></div>

            </div>


            <div className={`info-content ${data.reverse ? "reverse" : ""}`}>

                {/* ========================= */}
                {/* IMAGE */}
                {/* ========================= */}

                <div className="info-image">

                    <div className="image-wrapper">

                        <img
                            src={data.image}
                            alt={data.title}
                        />

                        <div className="image-gradient"></div>

                    </div>

                </div>



                {/* ========================= */}
                {/* TEXT */}
                {/* ========================= */}

                <div className="info-text">

                    <div className="info-tag">

                        <span></span>

                        {data.tag}

                    </div>


                    <h2>

                        {data.title}

                    </h2>


                    <div className="paragraphs">

                        {

                            data.paragraphs.map((paragraph, index) => (

                                <p key={index}>

                                    {paragraph}

                                </p>

                            ))

                        }

                    </div>



                    {/* ========================= */}
                    {/* STATS */}
                    {/* ========================= */}

                    <div className="stats-container">

                        {

                            data.stats.map((stat, index) => (

                                <div
                                    key={index}
                                    className="stat-card"
                                >

                                    <h3>

                                        {stat.number}

                                    </h3>

                                    <p>

                                        {stat.text}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </section>

    )

}
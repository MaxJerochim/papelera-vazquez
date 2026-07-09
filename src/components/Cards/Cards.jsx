import "./Cards.css";
import { cardsData } from "../../data/card_data/card_data";

import { PiRecycleBold } from "react-icons/pi";

import {
    FaTruck,
    FaIndustry,
    FaHandshake,
    FaBoxesStacked
} from "react-icons/fa6";

import { MdEco } from "react-icons/md";

const icons = {

    recycle: PiRecycleBold,

    truck: FaTruck,

    industry: FaIndustry,

    handshake: FaHandshake,

    boxes: FaBoxesStacked,

    leaf: MdEco

};

export default function Cards(){

    function handleMouseMove(e){

        const card = e.currentTarget;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);

        card.style.setProperty("--mouse-y", `${y}px`);

    }

    return(

        <section className="cards-section">

            <div className="cards-background">

                <div className="cards-glow glow-left"></div>

                <div className="cards-glow glow-right"></div>

                <div className="cards-grid-pattern"></div>

            </div>


            <div className="cards-container">

                <div className="cards-header">

                    <span className="cards-tag">

                        ¿Por qué elegir Grupo Fibras?

                    </span>

                    <h2>

                        Soluciones pensadas para la industria

                    </h2>

                    <p>

                        Más que un proveedor, somos un aliado estratégico para empresas que buscan optimizar la gestión de sus residuos de papel y cartón mediante un servicio confiable, profesional y comprometido con el medio ambiente.

                    </p>

                </div>



                <div className="cards-grid">

                    {

                        cardsData.map((card)=>{

                            const Icon = icons[card.icon];

                            return(

                                <article

                                    key={card.id}

                                    className="card"

                                    onMouseMove={handleMouseMove}

                                >

                                    <div className="card-icon">

                                        <Icon/>

                                    </div>

                                    <h3>

                                        {card.title}

                                    </h3>

                                    <p>

                                        {card.description}

                                    </p>

                                    <div className="card-line"></div>

                                </article>

                            )

                        })

                    }

                </div>

            </div>

        </section>

    )

}
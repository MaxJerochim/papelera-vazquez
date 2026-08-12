import "./Servicios.css";
import data from "./servicios.data.json";


export default function Servicios(){


    const {
        sectionLabel,
        title,
        description,
        services
    } = data;



    return(

        <section className="servicios" id="servicios">


            <div className="servicios-container">



                <header className="servicios-header">


                    <span>
                        {sectionLabel}
                    </span>



                    <h2>
                        {title}
                    </h2>



                    <p>
                        {description}
                    </p>



                </header>






                <div className="servicios-list">



                    {
                        services.map((service,index)=>(


                            <article
                                key={index}
                                className={`servicio servicio-${index+1}`}
                            >


                                <div className="servicio-photo">


                                    <img
                                        src={service.image}
                                        alt={service.title}
                                    />


                                </div>





                                <div className="servicio-info">


                                    <small>
                                        Servicio 0{index+1}
                                    </small>



                                    <h3>
                                        {service.title}
                                    </h3>



                                    <p>
                                        {service.description}
                                    </p>



                                </div>



                            </article>


                        ))
                    }




                </div>




            </div>


        </section>

    )

}
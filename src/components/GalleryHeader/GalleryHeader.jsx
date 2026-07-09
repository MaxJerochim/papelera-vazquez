import "./GalleryHeader.css";

export default function GalleryHeader() {

    return (

        <header className="gallery-header">

            <div className="gallery-badge">

                <span></span>

                Galería

            </div>


            <h2 className="gallery-title">

                Descubrí nuestro trabajo,
                <strong>
                    nuestra planta y nuestros productos.
                </strong>

            </h2>


            <div className="gallery-divider"></div>


            <p className="gallery-description">

                Cada imagen refleja el compromiso de Grupo Fibras con la
                recuperación, clasificación y comercialización de materiales
                reciclables. Conocé parte de nuestros procesos,
                instalaciones y productos que impulsan una industria más
                eficiente y sostenible.

            </p>


            <div className="gallery-info">

                <div className="gallery-stat">

                    <h3>40+</h3>

                    <p>Fotografías</p>

                </div>

            </div>

        </header>

    );

}
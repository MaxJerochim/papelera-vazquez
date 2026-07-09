import "./GalleryGrid.css";

export default function GalleryGrid({

    images,
    onImageClick

}) {

    return (

        <div className="gallery-grid">

            {

                images.map((image, index) => (

                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => onImageClick(index)}
                    >

                        <img
                            src={image.image}
                            alt={`Grupo Fibras ${image.id}`}
                            loading="lazy"
                            
                        />

                    </div>

                ))

            }

        </div>

    );

}
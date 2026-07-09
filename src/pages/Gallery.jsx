import { useState } from "react";

import "./Gallery.css";

import GalleryHeader from "../components/GalleryHeader/GalleryHeader";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Lightbox from "../components/Lightbox/Lightbox";
import Navbar from "../components/Navbar/Navbar";

import { products_a } from "../data/productos_a/productos_a";
import { products_b } from "../data/productos_b/productos_b";

export default function Gallery() {

    const images = [
    ...products_a,
    ...products_b
    ];

    const [currentIndex, setCurrentIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (

    <>


        <section
            className="gallery"
            id="gallery"
        >

            <div className="gallery-container">

                <GalleryHeader />

                <GalleryGrid
                    images={images}
                    onImageClick={openLightbox}
                />

            </div>

            <Lightbox
                images={images}
                currentIndex={currentIndex}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={previousImage}
            />

        </section>

    </>

    )

}
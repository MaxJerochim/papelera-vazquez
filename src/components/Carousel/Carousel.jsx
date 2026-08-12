import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

import "./Carousel.css";

export default function ProductCarousel({

    products,
    tag = "Nuestros Productos",
    title = "Calidad en cada proceso",

}) {

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(3);
    const [inView, setInView] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const sectionRef = useRef(null);

    // Responsive: cuántas cards se ven por vez
    useEffect(() => {

        function updateVisible() {

            if (window.innerWidth <= 700) setVisible(1);
            else if (window.innerWidth <= 1100) setVisible(2);
            else setVisible(3);

        }

        updateVisible();

        window.addEventListener("resize", updateVisible);

        return () => window.removeEventListener("resize", updateVisible);

    }, []);

    const maxIndex = Math.max(0, products.length - visible);

    const next = () => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Reajustar índice si cambia visible (resize) y queda fuera de rango
    useEffect(() => {

        setIndex((prev) => Math.min(prev, maxIndex));

    }, [maxIndex]);

    // Animación de entrada al hacer scroll
    useEffect(() => {

        const el = sectionRef.current;

        if (!el) return;

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setInView(true);

                    observer.disconnect();

                }

            },

            { threshold: 0.2 }

        );

        observer.observe(el);

        return () => observer.disconnect();

    }, []);

    // ===== Lightbox =====

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const lightboxNext = useCallback(() => {
        setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % products.length));
    }, [products.length]);

    const lightboxPrev = useCallback(() => {
        setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + products.length) % products.length));
    }, [products.length]);

    // Teclado: Escape para cerrar, flechas para navegar
    useEffect(() => {

        if (lightboxIndex === null) return;

        function handleKey(e) {

            if (e.key === "Escape") closeLightbox();
            else if (e.key === "ArrowRight") lightboxNext();
            else if (e.key === "ArrowLeft") lightboxPrev();

        }

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };

    }, [lightboxIndex, closeLightbox, lightboxNext, lightboxPrev]);

    const slideWidth = 100 / visible;

    return (

        <section
            className={`carousel-section ${inView ? "in-view" : ""}`}
            ref={sectionRef}
            id="products"
        >

            <div className="carousel-glow carousel-glow-1" />
            <div className="carousel-glow carousel-glow-2" />

            <div className="carousel-intro">

                <span className="carousel-tag">{tag}</span>

                <h2>{title}</h2>

            </div>

            <div className="carousel-wrapper">

                <button
                    className="carousel-arrow left"
                    onClick={prev}
                    aria-label="Anterior"
                >
                    ←
                </button>

                <div className="carousel-viewport">

                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${index * slideWidth}%)`,
                        }}
                    >

                        {products.map((product, i) => (

                            <div
                                key={product.id}
                                className="carousel-slide"
                                style={{ width: `${slideWidth}%` }}
                            >

                                <div
                                    className="carousel-card"
                                    onClick={() => openLightbox(i)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                                >

                                    <div className="carousel-img-wrapper">

                                        <img
                                            src={product.image}
                                            alt={product.description || `Producto ${product.id}`}
                                            loading="lazy"
                                        />

                                        <div className="carousel-img-overlay">
                                            <span className="carousel-zoom-icon">⤢</span>
                                        </div>

                                    </div>

                                    <p className="carousel-caption">
                                        {product.description || "Producto de la empresa"}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <button
                    className="carousel-arrow right"
                    onClick={next}
                    aria-label="Siguiente"
                >
                    →
                </button>

            </div>

            <div className="carousel-dots">

                {Array.from({ length: maxIndex + 1 }).map((_, i) => (

                    <button
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Ir al slide ${i + 1}`}
                    />

                ))}

            </div>

            {lightboxIndex !== null && createPortal(

                <div
                    className="lightbox-backdrop"
                    onClick={closeLightbox}
                >

                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                    >
                        ✕
                    </button>

                    <button
                        className="lightbox-arrow left"
                        onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                        aria-label="Anterior"
                    >
                        ←
                    </button>

                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <img
                            src={products[lightboxIndex].image}
                            alt={products[lightboxIndex].description || `Producto ${products[lightboxIndex].id}`}
                        />

                        <p className="lightbox-caption">
                            {products[lightboxIndex].description || "Producto de la empresa"}
                        </p>

                        <span className="lightbox-counter">
                            {lightboxIndex + 1} / {products.length}
                        </span>

                    </div>

                    <button
                        className="lightbox-arrow right"
                        onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                        aria-label="Siguiente"
                    >
                        →
                    </button>

                </div>,

                document.body

            )}

        </section>

    );

}
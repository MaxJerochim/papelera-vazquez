import { useState, useEffect, useRef } from "react";

import "./Carousel.css";

export default function ProductCarousel({

    products,
    tag = "Nuestros Productos",
    title = "Calidad en cada proceso",

}) {

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(3);
    const [paused, setPaused] = useState(false);
    const [inView, setInView] = useState(false);

    const sectionRef = useRef(null);
    const autoplayRef = useRef(null);

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

    // Autoplay
    useEffect(() => {

        if (paused) return;

        autoplayRef.current = setInterval(() => {
            next();
        }, 4000);

        return () => clearInterval(autoplayRef.current);

    }, [paused, maxIndex]);

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

    const slideWidth = 100 / visible;

    return (

        <section
            className={`carousel-section ${inView ? "in-view" : ""}`}
            ref={sectionRef}
            id="products"
        >

            <div className="carousel-intro">

                <span className="carousel-tag">{tag}</span>

                <h2>{title}</h2>

            </div>

            <div
                className="carousel-wrapper"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >

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

                        {products.map((product) => (

                            <div
                                key={product.id}
                                className="carousel-slide"
                                style={{ width: `${slideWidth}%` }}
                            >

                                <div className="carousel-card">

                                    <div className="carousel-img-wrapper">

                                        <img
                                            src={product.image}
                                            alt={product.description || `Producto ${product.id}`}
                                            loading="lazy"
                                        />

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

        </section>

    );

}
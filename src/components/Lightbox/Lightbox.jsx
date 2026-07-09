import { useEffect } from "react";

import "./Lightbox.css";

import {
    FaChevronLeft,
    FaChevronRight,
    FaXmark
} from "react-icons/fa6";

export default function Lightbox({

    images,
    currentIndex,
    onClose,
    onNext,
    onPrev

}) {

    useEffect(() => {

        const handleKeyDown = (e) => {

            if (currentIndex === null) return;

            if (e.key === "Escape") onClose();

            if (e.key === "ArrowRight") onNext();

            if (e.key === "ArrowLeft") onPrev();

        };

        window.addEventListener("keydown", handleKeyDown);

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

    }, [currentIndex, onClose, onNext, onPrev]);

    if (currentIndex === null) return null;

    return (

        <div
            className="lightbox-overlay"
            onClick={onClose}
        >

            <div
                className="lightbox"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="close-btn"
                    onClick={onClose}
                >

                    <FaXmark />

                </button>

                <button
                    className="nav-btn left"
                    onClick={onPrev}
                >

                    <FaChevronLeft />

                </button>

                <img
                    src={images[currentIndex].image}
                    alt=""
                />

                <button
                    className="nav-btn right"
                    onClick={onNext}
                >

                    <FaChevronRight />

                </button>

            </div>

        </div>

    );

}
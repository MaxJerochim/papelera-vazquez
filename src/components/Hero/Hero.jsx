import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">

      <div className="hero-bg">
        <img
          src="/images/REDES GFIBRAS2026/127.webp"
          alt="Gestión de residuos de papel y cartón"
          className="hero-bg-img"
        />

        <div className="hero-overlay"></div>
      </div>

      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="hero-content">

        <div className="hero-tag">
          <span></span>
          Industria papelera desde 1985
        </div>

        <h1>
          Ofrecemos gestión de{" "}
          <strong>
            residuos secos
          </strong>{" "}
          papel y cartón
        </h1>

        <p>
          Diseñamos soluciones de recolección, compra y reciclaje
          de papel y cartón con tecnología, calidad y compromiso
          ambiental para empresas que buscan crecer.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/servicios")}
          >
            Ver servicios
            <span>→</span>
          </button>

          <button className="secondary-btn">
            Solicitar cotización
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h3>60+</h3>
            <p>Años de experiencia</p>
          </div>

          <div>
            <h3>500+</h3>
            <p>Clientes satisfechos</p>
          </div>

          <div>
            <h3>99%</h3>
            <p>Calidad garantizada</p>
          </div>

        </div>

      </div>

    </section>
  );
}
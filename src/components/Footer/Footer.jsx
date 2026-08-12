import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo_transparente.png";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Papelera Vazquez" className="footer-logo" />
          <p>
            Reciclaje y procesamiento de fibras, comprometidos con la
            calidad, la eficiencia y el cuidado del medio ambiente.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/papelera.vazquez" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5491122334455" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <nav className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/">Empresa</NavLink></li>
            <li><NavLink to="/">Productos</NavLink></li>
            <li><NavLink to="/gallery">Galería</NavLink></li>
            <li><NavLink to="/">Contacto</NavLink></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <FaEnvelope />
              <a href="mailto:contacto@papeleravazquez.com">contacto@papeleravazquez.com</a>
            </li>
            <li>
              <FaWhatsapp />
              <a href="https://wa.me/5491122334455" target="_blank" rel="noopener noreferrer">+54 9 11 2233-4455</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>Av. Industrial 1234, Buenos Aires</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Horarios</h4>
          <ul className="footer-hours">
            <li>
              <span>Lunes a viernes</span>
              <strong>8:00 – 18:00</strong>
            </li>
            <li>
              <span>Sábados</span>
              <strong>8:00 – 13:00</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Papelera Vazquez. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <NavLink to="/">Privacidad</NavLink>
          <NavLink to="/">Términos</NavLink>
        </div>
      </div>
    </footer>
  );
}
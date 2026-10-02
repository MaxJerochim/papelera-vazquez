import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo_transparente.webp";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { EMAIL, PHONE_DISPLAY, ADDRESS, whatsappLink } from "../../data/contacto";

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
            <a href="https://www.instagram.com/grupofibrasavellaneda/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <nav className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/empresa">Empresa</NavLink></li>
            <li><NavLink to="/servicios">Servicios</NavLink></li>
            <li><NavLink to="/materiales">Materiales</NavLink></li>
            <li><NavLink to="/presupuesto">Pedir presupuesto</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <FaEnvelope />
              <a href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <FaWhatsapp />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Horarios</h4>
          <ul className="footer-hours">
            <li>
              <span>Lunes a viernes</span>
              <strong>8:00 – 19:00</strong>
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
      </div>
    </footer>
  );
}
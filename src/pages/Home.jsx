import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import AboutPapelera from "../components/AboutPapelera/AboutPapelera";
import ServiciosGrid from "../components/ServiciosGrid/ServiciosGrid";
import ProcesoDestacado from "../components/ProcesoDestacado/ProcesoDestacado";
import SolucionesEmpresas from "../components/SolucionesEmpresas/SolucionesEmpresas";
import ServiciosDestacados from "../components/ServiciosDestacados/ServiciosDestacados";
import HistoriaFamiliar from "../components/HistoriaFamiliar/HistoriaFamiliar";
import PublicosSegmentos from "../components/PublicosSegmentos/PublicosSegmentos"; // 1
import MineriaSection from "../components/MineriaSection/MineriaSection"; // 2
import NosotrosSection from "../components/NosotrosSection/NosotrosSection"; // 3
import Footer from "../components/Footer/Footer";
import ProductCarousel from "../components/Carousel/Carousel";
import products_c from "../data/productos_c/productos_c";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <AboutPapelera />
      <HistoriaFamiliar />
      <ServiciosGrid />
      <ProcesoDestacado />
      <ProductCarousel products={products_c}/>
      <Footer />
    </>
  );
}

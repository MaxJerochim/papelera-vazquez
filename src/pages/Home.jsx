import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import AboutPapelera from "../components/AboutPapelera/AboutPapelera";
import ServiciosGrid from "../components/ServiciosGrid/ServiciosGrid";
import ProcesoDestacado from "../components/ProcesoDestacado/ProcesoDestacado";
import HistoriaFamiliar from "../components/HistoriaFamiliar/HistoriaFamiliar";
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
    </>
  );
}

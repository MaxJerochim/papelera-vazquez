import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards"
import Carousel from "../components/Carousel/Carousel"
import Footer from "../components/Footer/Footer"
import { companyInfo } from "../data/company_info/company_info";
import InfoSection from "../components/InfoSection/InfoSection";
import { products_c } from "../data/productos_c/productos_c";
//import About from "../components/About/About";
//import Services from "../components/Services/Services";
//import CTA from "../components/CTA/CTA";
//import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
    
      <Hero />
      <Cards />
      <InfoSection data={companyInfo.about} />
      <InfoSection data={companyInfo.history} />
      <InfoSection data={companyInfo.circularEconomy} />
      <Carousel products={products_c} />
      <Footer />
      
      
    </>
  );
}
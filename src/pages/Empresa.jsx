import HeroEmpresa from "../components/HeroEmpresa/HeroEmpresa";
import MineriaSection from "../components/MineriaSection/MineriaSection";
import NosotrosSection from "../components/NosotrosSection/NosotrosSection";
import PublicosSegmentos from "../components/PublicosSegmentos/PublicosSegmentos";

export default function Home() {
    return (
        <>
            <HeroEmpresa />

            <MineriaSection />

            <NosotrosSection />

            <PublicosSegmentos />
        </>
    );
}
import Header from "@/components/Header";
import GalleryBanner from"@/components/GalleryBanner";
import MultiCard from"@/components/MultiCard";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";


export default function Home() { 
    return(
        <main classname="">
            <Header />
            <GalleryBanner />
            <MultiCard />
            <Cta />
            <Footer />
        </main>
    )
}
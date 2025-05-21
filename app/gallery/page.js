import Header from "@/components/common/header/Header";
import GalleryBanner from"@/components/GalleryBanner";
import MultiCard from"@/components/MultiCard";
import TabWithSlider from"@/components/TabWithSlider";
import Cta from "@/components/Cta";
import Footer from "@/components/common/Footer";


export default function Home() { 
    return(
        <main className="">
            <Header />
            <GalleryBanner />
            <MultiCard />
            <TabWithSlider />
            <Cta />
            <Footer />
        </main>
    )
}
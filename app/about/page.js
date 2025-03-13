import Header from "@/components/common/header/Header";
import BannerSecondLevel from "@/components/BannerSecondLevel";
import ColThreeWrap from "@/components/ColThreeWrap"; 
import ContentWithImage from "@/components/ContentWithImage";  
import Footer from "@/components/common/Footer";

export default function Home() { 
    return(
        <main classname="">
            <Header />
            <BannerSecondLevel />
            <ColThreeWrap />
            <ContentWithImage />
            <Footer />
        </main>
    )
}
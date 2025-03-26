import Header from "@/components/common/header/Header";
import BannerSecondLevel from "@/components/BannerSecondLevel";
import ColThreeWrap from "@/components/ColThreeWrap"; 
import ContentWithImage from "@/components/ContentWithImage";  
import ContentWithLeftImage from "@/components/ContentWithLeftImage";
import ContentWithRightImage from "@/components/ContentWithRightImage";
import Footer from "@/components/common/Footer";

export default function Home() { 
    return(
        <main classname="">
            <Header />
            <BannerSecondLevel />
            <ColThreeWrap />
            <ContentWithImage />
            <ContentWithLeftImage/>
            <ContentWithRightImage/>
            <Footer />
        </main>
    )
}
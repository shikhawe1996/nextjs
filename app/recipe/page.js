import Header from "@/components/Header";
import BannerThirdLevel from "@/components/BannerThirdLevel";
import ThreeCardWrapper from "@/components/ThreeCradWrapper";
import ColTwoWrap from "@/components/ColTwoWrap";
import FourCardWrap from"@/components/FourCardWrap";

import Footer from "@/components/common/Footer";


export default function Home() { 
    return(
        <main classname="">
            <Header />
            <BannerThirdLevel />
            <ThreeCardWrapper />
            <ColTwoWrap />
            <FourCardWrap />
            <Footer />
        </main>
    )
}
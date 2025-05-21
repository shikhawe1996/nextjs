import Header from "@/components/common/header/Header";
import BannerThirdLevel from "@/components/BannerThirdLevel";
import ThreeCardWrapper from "@/components/ThreeCradWrapper";
import AccordionFile from "@/components/AccordionFile";
import ColTwoWrap from "@/components/ColTwoWrap";
import FourCardWrap from"@/components/FourCardWrap";

import Footer from "@/components/common/Footer";


export default function Home() { 
    return(
        <main className="">
            <Header />
            <BannerThirdLevel />
            <ThreeCardWrapper />
            <AccordionFile />
            <ColTwoWrap />
            <FourCardWrap />
            <Footer />
        </main>
    )
}
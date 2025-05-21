import Header from "@/components/common/header/Header";
import HeroBanner from "@/components/HeroBanner";
import ColFourWrap from "@/components/ColFourWrap";
import ColTwoWrap from "@/components/ColTwoWrap";
import CardWithText from "@/components/CardWithText";
import OrangeColWrap from "@/components/OrangeColWrap";
import Cta from "@/components/Cta";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroBanner />
      <ColFourWrap />
      <ColTwoWrap />  
      <CardWithText />
      <OrangeColWrap />
      <Cta />
      <Footer />
    </main>
  );
}

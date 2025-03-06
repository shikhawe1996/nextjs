import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ColFourWrap from "@/components/ColFourWrap";
import ColTwoWrap from "@/components/ColTwoWrap";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroBanner />
      <ColFourWrap />
      <ColTwoWrap />
      <Cta />
      <Footer />
    </main>
  );
}

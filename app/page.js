import HeroBanner from "@/components/HeroBanner";
import ColFourWrap from "@/components/ColFourWrap";
import ColTwoWrap from "@/components/ColTwoWrap";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroBanner />
        <ColFourWrap />
        <ColTwoWrap />
        <Cta />
        <Footer />
      </main>
    
    </div>
  );
}

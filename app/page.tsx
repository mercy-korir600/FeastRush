import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/Howitworks";
import Cta from "@/components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background ">
      <Navbar/>
    <Hero/>
    <HowItWorks/>
    <Cta/>
    <Footer/>

    </main>
  );
}
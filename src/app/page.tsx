import Hero from "./components/Hero";
import Propos from "./components/Propos";
import Cta from "./components/Cta";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <Propos></Propos>
      <Cta></Cta>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

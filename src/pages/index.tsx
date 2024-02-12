import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className=" h-full" style={{background: "linear-gradient(180deg, hsla(0, 0%, 11%, 1) 0%, hsla(219, 98%, 50%, 1) 100%)"}}>
      <Layout />
      <div className="flex flex-col gap-6">
        <AboutUs />
        <Features/>
        {/* <Services /> */}
        {/* <Clients /> */}
        {/* <Contact /> */}
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

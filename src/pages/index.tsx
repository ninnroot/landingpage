import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 h-full">
      <Layout />
      <div className="flex flex-col gap-6">
        <AboutUs />
        <Services />
        <Clients />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

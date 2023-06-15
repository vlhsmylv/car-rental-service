import Hero from "@/components/base/Hero";
import Inventory from "@/components/Inventory";
import Navbar from "@/components/base/Navbar";
import OurNumbers from "@/components/OurNumbers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Subs from "@/components/Subs";
import Footer from "@/components/base/Footer";

const Index = () => {
  return (
    <>
      <Hero />
      <Inventory />
      <OurNumbers />
      <WhyChooseUs />
      <Subs />
    </>
  );
};

export default Index;

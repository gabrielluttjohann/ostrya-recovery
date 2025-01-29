import AboutUs from "@/components/About/About";
// import Contact from "@/comp\onents/Contact/Contact";
import CTA from "@/components/CTA/CTA";
// import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
// import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <AboutUs />
      <CTA />
      <Services />
      {/* <WhyChooseUs /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

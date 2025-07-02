
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MostSearched from "@/components/MostSearched";
import TopProviders from "@/components/TopProviders";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <MostSearched />
      <TopProviders />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

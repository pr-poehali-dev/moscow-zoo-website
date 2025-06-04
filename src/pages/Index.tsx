import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimalCards from "@/components/AnimalCards";
import ElephantShowcase from "@/components/ElephantShowcase";
import TicketInfo from "@/components/TicketInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AnimalCards />
      <ElephantShowcase />
      <TicketInfo />
      <Footer />
    </div>
  );
};

export default Index;

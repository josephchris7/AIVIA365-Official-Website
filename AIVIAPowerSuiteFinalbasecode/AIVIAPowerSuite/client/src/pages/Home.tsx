import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import PowerSuite from "@/components/PowerSuite";
import UseCases from "@/components/UseCases";
import Demo from "@/components/Demo";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Features />
        <PowerSuite />
        <UseCases />
        <Demo />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

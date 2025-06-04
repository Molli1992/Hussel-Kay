import HeroSection from "../../components/hero/heroSection/heroSection";
import ContactForm from "../../components/contactForm/contactForm";
import Reviews from "../../components/reviews/reviews";
import AboutUs from "../../components/home/aboutUs/aboutUs";
import HomeServices from "../../components/home/homeServices/homeServices";

export default function Home() {
  return (
    <main className="body">
      <HeroSection />

      <AboutUs />

      <HomeServices />

      <Reviews />

      <ContactForm />
    </main>
  );
}

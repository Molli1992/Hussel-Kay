import HeroHeader from "../../components/hero/heroHeader/heroHeader";
import ContactForm from "../../components/contactForm/contactForm";

export default function Contact() {
  return (
    <main className="body">
      <HeroHeader title="Let's Talk To Us" route="Contact Us" />

      <ContactForm />
    </main>
  );
}

import HeroHeader from "../../components/hero/heroHeader/heroHeader";
import Services from "../../components/services/services";

export default function ServicesPage() {
  return (
    <main className="body">
      <HeroHeader title="We Do Everything" route="Services" />

      <Services />
    </main>
  );
}

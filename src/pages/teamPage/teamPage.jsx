import HeroHeader from "../../components/hero/heroHeader/heroHeader";
import Team from "../../components/team/team";
import Reviews from "../../components/reviews/reviews";

export default function TeamPage() {
  return (
    <main className="body">
      <HeroHeader title="Meet Our Team" route="Team" />

      <Team />

      <Reviews />
    </main>
  );
}

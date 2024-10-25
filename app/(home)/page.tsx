import Features from 'app/_components/features';
import Hero from 'app/_components/hero';
import HowItWorks from '../_components/how-it-works';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <Features />
      <HowItWorks />
    </section>
  );
}

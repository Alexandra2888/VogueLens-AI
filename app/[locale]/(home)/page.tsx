import Hero from 'app/_components/hero';
import { DeferredSections } from './_components/deferred-home';

export default function HomePage() {
  return (
    <section>
      <Hero />
      <DeferredSections />
    </section>
  );
}

import Features from 'app/_components/features';
import Hero from 'app/_components/hero';
import HowItWorks from '../_components/how-it-works';
import Head from 'next/head';



export default function HomePage() {
  return (
    <section>
      <Head>
        <title>
         VogueLens AI | Your Fashion generator
        </title>
        <meta
          name="description"
          content="  Get personalized fashion advice, outfit recommendations and
                style tips from our AI-powered chatbot."
          key="desc"
        />
      </Head>
      <Hero />
      <Features />
      <HowItWorks />
    </section>
  );
}

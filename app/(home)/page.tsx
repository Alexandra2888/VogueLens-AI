import Head from 'next/head';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('app/_components/hero'));
const Features = dynamic(() => import('app/_components/features'));
const HowItWorks = dynamic(() => import('../_components/how-it-works'));

export default function HomePage() {
  return (
    <section>
      <Head>
        <title>VogueLens AI | Your Fashion generator</title>
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

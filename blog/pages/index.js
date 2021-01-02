import Head from "next/head";
import SEO from "../components/seo";
import LandingPage from "../components/landing-page";

export default function Home() {
  return (
    <div>
      <SEO />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
  );
}

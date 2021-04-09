import Head from "next/head";
import SEO from "../components/seo";
import LandingPage from "../components/landing-page";

export default function Home() {
  return (
    <>
      <SEO />
      <Head>
        <title>Habitt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}

import Head from "next/head";
import { getSiteMetaData } from "../utils/helpers";

export default function SEO({ title }) {
  const siteMetadata = getSiteMetaData();
  const metaDescription = siteMetadata.description;

  return (
    <Head>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || siteMetadata.title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="linkedin:creator" content={siteMetadata.social.linkedin} />
      <meta name="github:creator" content={siteMetadata.social.github} />
      <meta name="medium:creator" content={siteMetadata.social.medium} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />

      <link href="./fonts/raleway-v17-latin-500.woff2" rel="stylesheet" />
      <link href="./fonts/raleway-v17-latin-600.woff2" rel="stylesheet" />
      <link href="./fonts/raleway-v17-latin-700.woff2" rel="stylesheet" />
      <link href="./fonts/raleway-v17-latin-regular.woff2" rel="stylesheet" />
    </Head>
  );
}

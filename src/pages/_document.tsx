import { Html, Head, Main, NextScript } from "next/document"; 

export default function Document() {
  return (
    <Html className="geist" lang="en">
      <Head>
        <meta
          name="description"
          content="Flair Technologies LTD specializes in cutting-edge tech solutions, groundbreaking innovations, and transforming ideas into impactful realities. Join us in shaping the future with technology."
        />
        <meta
          name="keywords"
          content="Flair Technologies, flairtech, tech solutions, innovative technology, digital transformation, groundbreaking innovations, future technology"
        />
        <meta name="author" content="Flair Technologies LTD" />
        <meta name="url" content="flairtechlabs.com" />
        <link rel="icon" href="/ICON W TRANSPARENT BG.png" />
      </Head>
      <body className="geist antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

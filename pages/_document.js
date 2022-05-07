import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const pageTitle = `Todo App`;
  const metaImage = () => "public/tasks.ico";

  return (
    <Html>
      <Head>
        <title>Calendar Todo</title>
        <link rel="icon" href="/tasks.ico" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

        <meta name="description" content="Todo app" />
        <meta name="image" content={metaImage} />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:card" content="twitterCard" />
        <meta name="twitter:description" content="Todo app" />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:image:alt" content={pageTitle} />

        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content="Todo app" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={metaImage} />
        <meta name="og:image:secure_url" content={metaImage} />
        <meta name="og:image:alt" content={pageTitle} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

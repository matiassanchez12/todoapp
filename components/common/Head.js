import NextHead from "next/head";
import PropTypes from "prop-types";

import { typesValidator } from "./validator";

export const Head = ({ description = "This is a page description", type = "website" }) => {
  const pageTitle = "Calendar Todo";
  const metaImage = () => "/tasks.ico";

  return (
    <NextHead>
      <title>{pageTitle}</title>

      <link rel="icon" href="/tasks.ico" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

      <meta name="description" content={description} />
      <meta name="image" content={metaImage} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="twitterCard" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={pageTitle} />

      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={type} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:image:secure_url" content={metaImage} />
      <meta name="og:image:alt" content={pageTitle} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </NextHead>
  );
};

Head.propTypes = {
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(typesValidator),
};
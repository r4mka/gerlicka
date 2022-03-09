import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  /* Your site config here */
  siteMetadata: {
    siteName: 'Gerlicka MakeUp',
  },
  plugins: [
    'gatsby-plugin-typescript-checker',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;

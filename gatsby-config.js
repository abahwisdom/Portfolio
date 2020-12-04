module.exports = {
  siteMetadata: {
    title: `Abah Wisdom`,
    description: `Portfolio of Abah Wisdom`,
    author: `Abah Wisdom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `abahwisdom`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Fredericka the Great",
              variants: ["400"],
            },
            {
              family: "Playfair Display",
              variants: ["400", "700"],
            },
            {
              family: "Syne Mono",
              variants: ["400"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-preload-fonts`,
  ],
}

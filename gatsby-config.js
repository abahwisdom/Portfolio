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
        name: `Abah Wisdom`,
        short_name: `Abah Wisdom`,
        start_url: `/`,
        background_color: `#021426`,
        theme_color: `#021426`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
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

module.exports = {
  siteMetadata: {
    title: `MyFulk - Drive Business Towards Success`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-nprogress`,
      options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: true,
    }
  },

  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-114378127-1",
      // Puts tracking script in the head instead of the body
      head: true,
      // Setting this parameter is optional
      anonymize: true,
    },
  },

  {

  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [`gatsby-remark-responsive-iframe`],
  },

  },

  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/assets/logo.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }
  ]
}
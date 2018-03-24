module.exports = {
  siteMetadata: {
    title: 'Chris Gomez | Leader, Maker, and Innovator',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-116277831-1',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W6V7C5K',
        includeInDevelopment: false,
      },
    },
  ],
};

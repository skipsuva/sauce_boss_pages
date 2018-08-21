module.exports = {
  siteMetadata: {
    title: 'SauceBoss',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typography',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    }
  ],
};

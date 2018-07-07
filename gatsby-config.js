
module.exports = {
  siteMetadata: {
    title: 'Alan B Smith',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}

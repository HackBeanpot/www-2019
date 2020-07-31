module.exports = {
  siteMetadata: {
    title: 'HackBeanpot 2020',
    siteUrl: 'https://hackbeanpot.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152750259-1",
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: "https://hackbeanpot.us18.list-manage.com/subscribe/post?u=8d9901211393038273091ce5a&amp;id=9054b3454d", // string; add your MC list endpoint here; see instructions below
      },
  },
  ]
};

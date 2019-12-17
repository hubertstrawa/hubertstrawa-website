module.exports = {
  siteMetadata: {
    title: 'Hubert Strawa Portfolio Website',
    author: 'Hubert Strawa',
    description: 'test',

    // social links
    twitterUrl: 'https://twitter.com/hubertstrawa',
    githubUrl: 'https://github.com/hubertstrawa',
    linkedinUrl: 'https://www.linkedin.com/in/hubert-strawa',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
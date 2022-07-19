module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  assetPrefix: '__GATSBY_RELATIVE_PATH__',
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // recomended to avoid react routes redirections
    `@wardpeet/gatsby-plugin-static-site`,
    {
      resolve: 'gatsby-plugin-relative-paths',
    },
    {
      resolve: `gatsby-source-sqlite`,
      options: {
        fileName: './data/SQLite.sqlite',
        queries: [
          {
            statement: 'SELECT * FROM Users',
            idFieldName: 'email',
            name: 'Users'
          }
        ]
      }
    }
  ],
}

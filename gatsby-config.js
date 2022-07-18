module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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

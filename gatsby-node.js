exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile(filter: { name: { eq: "index" } }) {
          edges {
            node {
              absolutePath
              relativeDirectory
              name
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        result.data.allFile.edges.forEach(
          ({ node: { absolutePath, relativeDirectory, name } }) => {

            createPage({
              path: `${relativeDirectory}/${name}`,
              component: absolutePath,
            })
          }
        )
      })
      .then(resolve)
  })
}

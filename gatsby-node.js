const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error with contentful data", result.errors)
      }

      const teamTemplate = path.resolve("./src/templates/team.js")

      result.data.allContentfulBlog.edges.forEach(team => {
        createPage({
          path: `/teams/${team.node.slug}/`,
          component: slash(teamTemplate),
          context: {
            slug: team.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("error with contentful data", error))
}

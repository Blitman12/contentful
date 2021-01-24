import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const Posts = ({ data: { allSitePage, allContentfulBlog } }) => {
  const [linkData, setLinkData] = useState(null)

  useEffect(
    () => {
      // defensive check for data (ensuring data is there), makes sure the code doesnt run when data does not exist yet
      if (allSitePage.edges && allContentfulBlog.group) {
        // Flattening website query data to array of paths (easier to work with)
        const teamNameArr = allContentfulBlog.group.map(
          node => node.nodes[0].slug
        )
        // Simplyifing team data to array of names
        const slugArr = allSitePage.edges.map(edge => edge.node.path)

        // setting linkData state
        setLinkData(
          slugArr.reduce(
            (accum, slug) => {
              let teamObj = null
              teamNameArr.forEach(name => {
                if (slug.includes(name)) {
                  teamObj = { name, slug }
                }
              })
              // return with spread operator because otherwise it would return this for example: [...[{slug: '/kvoth', name: 'kvoth'}],{ slug: '/apples', name: 'apples' }]
              // You want no nested arrays
              return teamObj ? [...accum, teamObj] : accum
            },
            //initializes accum as an empty array otherwise it would try and spread undefined, want it to be the right item at start
            []
          )
        )
      }
    },
    // dependency array, if any of these change then useEffect runs again
    [allContentfulBlog, allSitePage]
  )

  return (
    <div>
      {/* short circuting: linkData does not effect on first run. If statement essentially, Wont run if linkData evaluates false. Can you and or or */}
      {linkData &&
        linkData.map(({ name, slug }) => (
          <Link to={`${slug}`} key={slug}>
            {name}
          </Link>
        ))}
    </div>
  )
}

export default Posts

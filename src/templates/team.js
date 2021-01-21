import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1>{data.team.teamInfo.name}</h1>
      <p>{data.team.teamInfo.sport}</p>
      <div>
        {data.team.coaches.map(coach => (
          <p>{coach}</p>
        ))}
      </div>
    </div>
  )
}

export default Team

export const pageQuery = graphql`
  query($slug: String!) {
    team: contentfulBlog(slug: { eq: $slug }) {
      slug
      teeball
      coed
      coaches
      numberOfPlayers
      teamInfo {
        name
        sport
        league
      }
    }
  }
`

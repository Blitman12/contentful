import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../components/otherPages.css"

const Team = ({ data }) => {

  const [coachString, setCoachString] = useState("")

  useEffect(
    () => {
      if (data.team) {
        setCoachString(data.team.coaches.join(`, `))
      }
    },
    { data }
  )

  return (
    <Layout>
      <div>
        <h1 className="title">{data.team.teamInfo.name}</h1>
        <p>Sport: {data.team.teamInfo.sport}</p>
        <br></br>
        <br></br>
        <p>Number of players enrolled: {data.team.numberOfPlayers}</p>
        <br></br>
        <br></br>
        {/* short circtu: if coachString exists render this div */}
        {coachString && (
          <div>
            Coaches:{` `}
            <p>{coachString}</p>
          </div>
        )}
      </div>
    </Layout>
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

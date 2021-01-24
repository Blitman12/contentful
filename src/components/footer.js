import { Link } from "gatsby"
import React from "react"


const Footer = () => (
      <div
        style={{
          margin: `0 auto`,
          position: `fixed`,
          textAlign: `center`,
          left: `0`,
          right: `0`,
          bottom: `0`,
          padding: `0.2rem 0.2rem`,
          background: `#283747`,
          
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="https://github.com/Blitman12/contentful"
            style={{
              color: `#de354c`,
              textDecoration: `none`,
              fontSize: `30px`,
            }}
          >
            Click to view the code on Github
          </Link>
        </h1>
      </div>
  )

  export default Footer
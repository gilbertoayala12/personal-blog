import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gilberto Ayala"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey everyone{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          Currently an Intern at{" "}
          <a href="https://nearsoftjobs.com/" target="_blank">
            Nearsoft, Inc
          </a>
        </p>
        <p>
          I'm a Web developer that likes to work with React and likes to build
          pretty things
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

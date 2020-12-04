import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Technologies from "../components/technologies"
import Work from "../components/work"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <Technologies/>
    <Work/>
    <Contact/>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
    {/* </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage

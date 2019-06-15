import React from "react"

import Layout from "../components/layout"
import Image from "../components/LandingImage"
import SEO from "../components/seo"
import Landing from '../components/Landing'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage

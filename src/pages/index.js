import React from "react"

import Layout from "../components/layout"
import Image from "../components/LandingImage"
import SEO from "../components/seo"
import Card from '../components/Card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Card />
  </Layout>
)

export default IndexPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFoundCard from '../components/NotFoundCard'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundCard />
  </Layout>
)

export default NotFoundPage

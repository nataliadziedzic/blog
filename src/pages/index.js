import React from "react";
import { Link } from "gatsby";
import MainLayout from "../layouts"

import SEO from "../components/seo"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hello from the other site</h1>
  </MainLayout>
)

export default IndexPage

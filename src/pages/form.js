import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FORM = () => (
  <Layout>
    <SEO title="404: Not found" />
    <form name="contact" netlify>
        <p>
            <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
            <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
  </Layout>
)

export default FORM;

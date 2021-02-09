import React from "react"
import { PageProps, Link, graphql } from "gatsby"

const ComponentName = ({data}) => <div>
    <h1>this is home page</h1>
    <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>


export const query = graphql`
  {
    allSiteBuildMetadata {
        totalCount
        pageInfo {
          currentPage
        }
        nodes {
          buildTime(difference: "", formatString: "", fromNow: false, locale: "")
          id
          parent {
            id
          }
        }
      }
  }
`

export default ComponentName;
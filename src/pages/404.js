import React from "react"
import styles from "../styles/404.module.css"

import { graphql } from "gatsby"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const NotFoundPage = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const slug = "/404"

  return (
    <>
      <SEO
        title={"404: Not Found"}
        description={"This is the 404 page of this site"}
        slug={slug}
      />
      <section className={styles.wrapper}>
        <FontAwesomeIcon icon="bomb" className={styles.icon}/>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

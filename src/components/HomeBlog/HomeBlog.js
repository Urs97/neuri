import React from "react"
import styles_global from "../../styles/global.module.css"
import styles from "./HomeBlog.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import LocalizedLink from '../LocalizedLink'
import useTranslations from '../useTranslations'

import SectionHeader from "../SectionHeader/SectionHeader"

const HomeBlog = () => {
  const { lang, newsUrl, homeBlogTitle, homeBlogSubtitle, homeBlogButton } = useTranslations()

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              thumbnail {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              thumbnail_author
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Filtered by lang and set limit to 3 posts
  const filtered = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.lang === lang).slice(0, 3)

  // Custom date language formatting
  const formatDate = postDate => {
    const dateLang = lang === 'en' ? 'en-EN' : 'hr-HR';
    const date = new Date(postDate)
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric'}
    return date.toLocaleDateString(dateLang, dateOptions)
  }

  return (
    <>
      <section className={styles.nav_offset} id={newsUrl} />
      <section className={styles.width_wrapper}>
        <section className={styles.wrapper}>
          <SectionHeader title={homeBlogTitle} subtitle={homeBlogSubtitle} icon={'file-alt'}/>
          <section className={styles.grid}>
            {filtered.map(({ node }) => (
              <section key={node.id} className={styles.blog_post}>
                <LocalizedLink to={node.fields.slug}>
                  <Img
                    className={styles.img}
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={`Photo by ${node.frontmatter.thumbnail_author} on Unsplash`}
                  />
                </LocalizedLink>
                <p className={styles.date}>
                  <i>{formatDate(node.frontmatter.date)}</i>
                </p>
                <LocalizedLink to={node.fields.slug}>
                  <h4 className={styles.title}>{node.frontmatter.title}</h4>
                </LocalizedLink>
                <p className={styles.description}>{node.frontmatter.description}</p>
              </section>
            ))}
          </section>
          <LocalizedLink
            to="/blog"
            className={`${styles_global.button} ${styles.button}`}
          >
            {homeBlogButton}
          </LocalizedLink>
        </section>
      </section>
    </>
  )
}

export default HomeBlog

// (formatString: "DD MMMM, YYYY")
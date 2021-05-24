import React from "react"
import styles_global from "../../styles/global.module.css"
import styles from "./Blog.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import LocalizedLink from '../LocalizedLink'

import useTranslations from '../useTranslations'

import SectionHeader from "../SectionHeader/SectionHeader"

const Blog = () => {
  const { lang, blogBackToHomepage } = useTranslations();

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
              date(formatString: "DD MMMM, YYYY", locale: "hr")
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

  const filtered = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.lang === lang);  

  return (
    <>
      <section className={styles.nav_bg} />
      <section className={styles.width_wrapper} id="novosti">
        <section className={styles.wrapper}>
          <SectionHeader title={'Latest News'} subtitle={'Find Out More'} icon={'file-alt'}/>
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
                  <i>{node.frontmatter.date}</i>
                </p>
                <LocalizedLink to={node.fields.slug}>
                  <h4 className={styles.title}>{node.frontmatter.title}</h4>
                </LocalizedLink>
                <p className={styles.description}>{node.frontmatter.description}</p>
              </section>
            ))}
          </section>
          <LocalizedLink
            to="/"
            className={`${styles_global.button} ${styles.button}`}
          >
            {blogBackToHomepage}
          </LocalizedLink>
        </section>
      </section>
    </>
  )
}

export default Blog

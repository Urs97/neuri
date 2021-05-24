import React from "react"
import styles from "../styles/blogPost.module.css"

import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import useTranslations from '../components/useTranslations'

const BlogPostTemplate = ({ data }) => {
  const { lang } = useTranslations()

  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const slug = post.fields.slug
  const postImg = post.frontmatter.thumbnail.childImageSharp.fluid
  const postImgSrc = postImg.src

  // Custom date language formatting
  const formatDate = postDate => {
    const dateLang = lang === 'en' ? 'en-EN' : 'hr-HR';
    const date = new Date(postDate)
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric'}
    return date.toLocaleDateString(dateLang, dateOptions)
  }

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        postImg={postImgSrc}
        slug={slug}
      />
      <section className={styles.nav_bg}/>
      <section className={styles.width_wrapper}>
        <article className={styles.article}>
          <header>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <p className={styles.date}>{formatDate(post.frontmatter.date)}</p>
            <Img
              className={styles.img}
              fluid={postImg}
              alt={`Photo by ${post.frontmatter.thumbnail_author}`}
            />
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        thumbnail_author
      }
    }
  }
`

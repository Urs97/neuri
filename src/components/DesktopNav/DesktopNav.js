import React, { useState, useEffect } from "react"
import styles from "./DesktopNav.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import useMenu from '../useMenu'

import LocalizedLink from '../LocalizedLink'
import LanguageSwitchLink from '../LanguageSwitchLink/LanguageSwitchLink'

const DesktopNav = () => {
  const menuItems = useMenu()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "neuri-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [scrolled, setScrolled]= useState(false);

  const handleScroll=() => {
      const offset = window.scrollY;
      if(offset > 100 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <header className={`${styles.wrapper} ${scrolled ? styles.sticky : ''}`}>
      <LocalizedLink to="/" onClick={() => window.scrollTo({top: 0})} className={styles.logo_wrapper}>
        <Img className={styles.logo} fluid={data.image.childImageSharp.fluid} alt="Neuri logo"/>
      </LocalizedLink>
      <nav className={styles.nav}>
        {menuItems.map((menu, index) => (
          <LocalizedLink
            key={`${menu.link}${index}`}
            to={menu.link}
            aria-label={menu.name}
          >
            {menu.name}
          </LocalizedLink>
        ))}
        <LanguageSwitchLink />
      </nav>
    </header>
  )
}

export default DesktopNav

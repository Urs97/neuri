import React, { useState } from "react"
import styles from "./MobileNav.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import useMenu from '../useMenu'

import LocalizedLink from '../LocalizedLink'
import LanguageSwitchLink from '../LanguageSwitchLink/LanguageSwitchLink'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = useMenu()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "neuri-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  
  return (
    <header className={`${styles.wrapper} ${styles.sticky}`}>
      <section>
        <LocalizedLink to="/" onClick={() => window.scrollTo({top: 0})} className={styles.logo_wrapper}>
          <Img className={styles.logo} fluid={data.image.childImageSharp.fluid} alt="Neuri logo"/>
        </LocalizedLink>
        <FontAwesomeIcon
          icon="bars"
          width="25"
          className={`${
            isOpen ? styles.hamburger_menu_clicked : styles.hamburger_menu
          }`}
          onClick={() => setIsOpen(isOpen => !isOpen)}
        />
      </section>
      <nav className={`${isOpen ? styles.nav : styles.collapsed}`}>
        {menuItems.map((menu, index) => (
          <LocalizedLink
            key={`${menu.link}${index}`}
            to={menu.link}
            aria-label={menu.name}
            onClick={() => setIsOpen(isOpen => !isOpen)}
          >
            {menu.name}
          </LocalizedLink>
        ))}
        <LanguageSwitchLink isOpen={isOpen} setIsOpen={setIsOpen}/>
      </nav>
    </header>
  )
}

export default MobileNav

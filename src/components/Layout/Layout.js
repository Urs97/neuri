import React from "react"

import MobileNav from "../MobileNav/MobileNav"
import DesktopNav from "../DesktopNav/DesktopNav"
import Footer from "../Footer/Footer"

import { useLocale } from '../../hooks/locale';

const Layout = ({ children, pageContext: { locale } }) => {
  // Using the useLocale() hook to define the correct locale 
  // that will be available in all components of the tree thought its context
  const { changeLocale } = useLocale();
  changeLocale(locale);

  return (
    <>
      <MobileNav />
      <DesktopNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

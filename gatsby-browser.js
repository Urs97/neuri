// custom typefaces
import "fontsource-raleway/900-normal.css"
import "fontsource-roboto"

import "prismjs/themes/prism.css"

import React from 'react'

import AppProvider from './src/hooks';
import Layout from './src/components/Layout/Layout';

export const wrapRootElement = ({ element }) => {
    return (
        <AppProvider>
            {element}
        </AppProvider>
    )
} 

export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>{element}</Layout>
    )
} 

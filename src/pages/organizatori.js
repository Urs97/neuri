import React from 'react'

import SEO from '../components/seo'
import OrganizersDetails from '../components/OrganizersDetails/OrganizersDetails'

const OrganizatoriPage = () => {
    return (
        <>
            <SEO         
                title={"NeuRi 2021 Organizatori"}
            />
            <OrganizersDetails />
        </>
    )
}

export default OrganizatoriPage

import React from 'react'

import SEO from '../components/seo'
import OrganizersDetails from '../components/OrganizersDetails/OrganizersDetails'

const OrganizersPage = () => {
    return (
        <>
            <SEO         
                title={"NeuRi 2021 Organizers"}
            />
            <OrganizersDetails />
        </>
    )
}

export default OrganizersPage

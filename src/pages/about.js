import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout pageTitle="About Mikko">
            <p>Hi there! I'm the creator of this about site.</p>
        </Layout>
    )
}

export const Head = () => 
<>
<title>About Mikko</title>
<meta name="description" content="Mikko desc" />
</>
export default AboutPage
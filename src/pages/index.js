// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Mikkos Gatsby home">
      <p>I'm making this Gatsby Tutorial.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy now
export const Head = () => <title>Mikko Home Page</title>

// Step 3: Export your component
export default IndexPage
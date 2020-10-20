import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>
                Posts will show up here later on .
            </p>
            <p>Find me on <Link to="https://singlebucks.blogspot.com/">Blogger</Link></p>
        </Layout>
    )

}

export default BlogPage
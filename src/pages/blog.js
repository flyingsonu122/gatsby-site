import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const BlogPage = () => {
    return (
        <div>
            <Header />
            <h1>Blog</h1>
            <p>
                Posts will show up here later on .
            </p>
            <p>Find me on <Link to="https://singlebucks.blogspot.com/">Blogger</Link></p>
            <Footer />
        </div>
    )
}

export default BlogPage
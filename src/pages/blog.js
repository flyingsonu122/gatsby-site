import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const BlogPage = () => {
    return (
        <div>
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
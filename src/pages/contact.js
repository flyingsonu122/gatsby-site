import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <h1>Contact </h1>
            <p>
                The Best way to reach me is via <Link to="https://twitter.com/sonukumarkush12">@sonukumarkush12</Link>  on Twitter 
            </p>
            <Footer />
        </div>
    )
}

export default ContactPage
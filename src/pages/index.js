import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello You.</h1>
	  		<h2>
                I'm Sonu, a full-stack developer living in beautiful Bihar, India. 
            </h2>
			
			<p>Need a Developer ? <Link to="/contact">Contact me</Link></p>

        </Layout>
    )

}

export default IndexPage
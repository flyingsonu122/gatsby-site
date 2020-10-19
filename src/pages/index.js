import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>The Great Gatsby Bootcamp</h1>
	  		<h2>I'm Sonu, a full-stack developer living in beautiful Bihar, India. </h2>
			
			<p>Need a Developer ? <Link to="/contact">Contact me.</Link></p>
        </div>
    )
}

export default IndexPage
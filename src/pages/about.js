import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <h4>Hi there!</h4>
            <h5> I'm Sonu kumar kushwaha from India, born in Gopalganj, a sunny place in the state of Bihar. A computer science student, Passionate reader. Eager to find the root cause of problems. For fun, I like to ride my motorcycle and follow my home cricket team.

            </h5>
            <p>Want to work with me ?<Link to="/contact">Reach Out</Link></p>
        </div>
    )
}

export default AboutPage
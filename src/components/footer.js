import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p></p>
            
            <p>
                Created by <Link to="https://github.com/flyingsonu122">{data.site.siteMetadata.author}</Link> © 2020
                
            </p>
        </footer>
    )
}

export default Footer
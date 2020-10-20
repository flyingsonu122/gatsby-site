module.exports = {
	siteMetadata: {
		title: 'Sonu\'s Gatsby Site',
		author: 'Sonu kumar kushwaha'
	},
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-transformer-remark'
	]
} 
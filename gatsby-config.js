require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const linkResolver = require('./src/utils/linkResolver')

const reponame = process.env.GATSBY_PRISMIC_REPO_NAME
const apiKey = process.env.PRISMIC_ACCESS_TOKEN
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID

const blogHomeSchema = require('./custom_types/bloghome.json')
const postSchema = require('./custom_types/post.json')
const aboutMeSchema = require('./custom_types/aboutme.json')
const contactMeSchema = require('./custom_types/contactme.json')
const landingBannerSchema = require('./custom_types/landing_banner.json')
const projectSchema = require('./custom_types/project.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    releaseID: prismicReleaseID,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      bloghome: blogHomeSchema,
      post: postSchema,
      aboutme: aboutMeSchema,
      contactme: contactMeSchema,
      landing_banner: landingBannerSchema,
      project: projectSchema,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: 'Nathan LeRoy',
    description: 'The blog and personal site of Nathan LeRoy',
    author: '@nathanjleroy',
    twitterUsername: '@NathanJLeRoy',
    siteUrl: 'https://nathanleroy.io',
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-twitter',
    'gatsby-plugin-tiktok',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
  ],
}

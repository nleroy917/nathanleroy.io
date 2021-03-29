import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import {HomeHead, AboutMe, Projects, ContactMe} from '../components/sections';
import '../styles/home.css';

// Query for the Blog Home content in Prismic
export const query = graphql`
query HomeQuery {
  prismicBloghome {
    data {
      description {
        text
      }
      headline {
        text
      }
      image {
        url
      }
    }
    id
    type
  }
  prismicAboutme {
    data {
      about_me {
        text
      }
      image {
        url
      }
      heading {
        text
      }
    }
  }
  prismicContactme {
    data {
      contact_me {
        text
      }
      title {
        text
      }
    }
  }
  allPrismicProject {
    edges {
      node {
        data {
          description {
            text
          }
          github {
            url
          }
          image {
            alt
            url
          }
          website {
            url
          }
          name {
            text
          }
        }
        tags
      }
    }
  }
}
`

const Homepage = ({ data }) => {
  if (!data) return null

  // Define the Blog Home & Blog Post content returned from Prismic
  const home = data.prismicBloghome.data
  const aboutMe = data.prismicAboutme.data
  const contactMe = data.prismicContactme.data
  const projects = data.allPrismicProject.edges


  // create anchors for scrolling
  const bioAnchor = React.useRef(null)
  const projectAnchor = React.useRef(null)
  const contactAnchor = React.useRef(null)

  return (
    <Layout> 
      <HomeHead home={home} projects={projects} anchors={{bio: bioAnchor, projects: projectAnchor, contact: contactAnchor}}/>
      <AboutMe aboutMe={aboutMe} anchors={{bio: bioAnchor}}/>
      <Projects projects={projects} anchors={{projects: projectAnchor}}/>
      <ContactMe contactMe={contactMe} anchors={{contact: contactAnchor}} />
    </Layout>
  )
}

export default withPreview(Homepage)

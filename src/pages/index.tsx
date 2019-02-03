import React from 'react'

import Layout from '../components/layout'
import Intro from '../components/sections/intro'
import Skills from '../components/sections/skills'
import Image from '../components/Image'
import SEO from '../components/seo'

import './index.less'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `bent rynning`, `desing`]} />
    <Intro/>
    <Skills />
  </Layout>
)

export default IndexPage

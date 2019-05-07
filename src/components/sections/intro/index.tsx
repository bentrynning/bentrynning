import React from 'react'
import './intro.less'
import Image from '../../Image'

const Intro = () => (
  <section className="intro section">
    <div className="intro__image">
      <Image />
    </div>
    <h1 className="title text-l">Hi</h1>
    <p className="m-1 text-s">
      Welcome to my <span className="text-red--bold">FRAME</span>
    </p>
    <p className="m-1 text-s">
      This is my portfolio site, where I share a bit about me, my passion and
      work.
    </p>
  </section>
)

export default Intro

import React from 'react'
import Skillwheel from '../skillwheel'

import './skills.less';

const Skills = () => (
  <section className="skills section">
    <h1 className="text-l">My skills</h1>

    <h2 className="text-m m-1">Frontend</h2>
    <div className="skills__content">
      <Skillwheel name="Javascript" level="90" color="red" />
      <Skillwheel name="Typescript" level="85" color="red" />
      <Skillwheel name="HTML" level="100" color="green" />
      <Skillwheel name="CSS" level="98" color="green" />
    </div>

    <h2 className="text-m m-1">Backend</h2>
    <div className="skills__content">
      <Skillwheel name="Java" level="60" color="blue" />
      <Skillwheel name="C#" level="40" color="blue" />
      <Skillwheel name="Node" level="80" color="orange" />
    </div>
  </section>
)

export default Skills

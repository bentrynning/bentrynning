import React from 'react'
import Skill from '../../Skill'

import './skills.less'

const Skills = () => {
  return (
    <section id="skill_section" className="skills section">
      <div className="skills__container">
        <h1 className="title text-l m-3">Skills</h1>
        <p className="text-s m-3">
          1 year UX and 4 year web developer experience. Worked with different
          technologies both in front and backend. My focus and passion is frontend development and user experieance
        </p>
      
        <p className="text-m m-1">Frontend</p>
        <div className="skills__content">
          <Skill name="Javascript" level="90" color="red" />
          <Skill name="Typescript" level="85" color="red"  />
          <Skill name="React" level="90" color="purple"  />
          <Skill name="Angular" level="70" color="purple"  />
          <Skill name="Vue" level="60" color="purple"  />
          <Skill name="HTML" level="98" color="green" />
          <Skill name="CSS" level="90" color="green" />
          <Skill name="Less" level="88" color="green" />
        </div>

        <p className="text-m m-1">Backend</p>
        <div className="skills__content">
          <Skill name="Java" level="50" color="blue" />
          <Skill name="C#" level="40" color="blue" />
          <Skill name="Node js" level="60" color="orange" />
        </div>
      </div>
    </section>
  )
}

export default Skills



import React, { useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import { SkillCard } from '../components/index'
import { skillsCardsData } from '../data'

const Skills = () => {

  const skillsSection = useRef()
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    addEventListener("scroll", () => {
      if (scrollY >= (skillsSection.current.offsetTop - 200)) {
        setScroll(true)
      }
    })
  }, [])

  return (
    <Section title={{ colored: "what i expert?", main: "acquired skills"}} rfrnc={skillsSection} id="skills">
      <div className='flex flex-col gap-5'>
        {skillsCardsData.map(skill => {
          const { id, percentage, icon, name, color } = skill
          return <SkillCard key={id} icon={icon} name={name} percentage={percentage} color={color} skillsScroll={scroll} />
        })}
      </div>
    </Section>
  )
}

export default Skills
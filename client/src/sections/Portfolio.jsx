

import React, { useEffect, useState } from 'react'
import Section from '../components/Section'
import { ProjectCard } from '../components/index'
import { motion } from 'framer-motion'
import { portfolioProjectsData, portfolioCategoriesData } from '../data'
import { categoresNames } from '../Styles'

const Portfolio = () => {

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([...portfolioProjectsData])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects([...portfolioProjectsData])
    } else {
      setFilteredProjects([...portfolioProjectsData].filter(
        listItem => listItem.category === selectedCategory
      ))
    }
  }, [selectedCategory])

  return (
    <Section title={{ colored: "my work", main: "awesome projects" }} id="portfolio" className='overflow-hidden'>
        <div className='flex items-center gap-2 justify-center mt-[-20px] mb-[40px]'>
          {portfolioCategoriesData.map(category => {
            const { id, categoryName } = category
            const { active, normal } = categoresNames
            return (
              <span
                onClick={() => setSelectedCategory(categoryName.toLowerCase())} 
                className={`py-1 px-2 rounded-md cursor-pointer duration-150 
                          ${categoryName.toLocaleLowerCase() === selectedCategory ? active : normal}`} 
                key={id}
              >
                {categoryName}
              </span>
            )
          })}
        </div>
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1, delay: .5 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
        >
          {filteredProjects.map(item => {
            const { id, img, link, fullScreenImage } = item
            return <ProjectCard img={img} link={link} fullImage={fullScreenImage} key={id} />
          })}
        </motion.div>
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1 }}
          className='mt-[3rem] mx-auto flex text-center sm:text-left flex-col items-center bg-white p-[1rem] lg:pb-8 rounded-lg sm:flex-row sm:items-end sm:justify-between'
        >
          <div>
            <h2 className='text-lg lg:text-2xl font-medium'>so let's talk about</h2>
            <h1 className='text-primary text-[26px] lg:text-[40px] font-semibold'>your next projects</h1>
          </div>
          <a className='bg-primary text-white rounded-lg py-2 px-4 mt-4 hover:bg-primary-hover' href='#contact'>Contact Me</a>
        </motion.div>
    </Section>
  )
}

export default Portfolio
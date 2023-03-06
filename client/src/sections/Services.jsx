
import React from 'react'
import Section from '../components/Section'
import { servicesCardsData } from '../data'
import { ServiceCard } from '../components/index'

const Services = () => {
  return (
    <Section title={{ colored: "what i provide?", main: "services"}} id="services">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]'>
        {servicesCardsData.map(service => {
          const { id, icon, title, description } = service
          return <ServiceCard 
            key={id} 
            icon={icon} 
            title={title} 
            desc={description}
          />
        })}
      </div>
    </Section>
  )
}

export default Services
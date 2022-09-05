import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/h.png'
import IMG2 from '../../assets/y.png'

//Api
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Youtube Clone',
    github: 'https://github.com/Rajeshbhuyan123/Youtube-clone',
    demo: 'https://disney-clone-3421e.web.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Disney+ Clone',
    github: 'https://github.com/Rajeshbhuyan123/Disney-clone',
    demo: 'https://jazzy-piroshki-7fea0f.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
       {
         data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
               <img src={image} alt={title} />
            </div>
             <h3>{title}</h3>
             <div className="portfolio_item-cta">
             <a href={github} className='btn'>Github</a>
             <a href={demo} className='btn btn-primary' target='_blank'>View</a>
             </div>
         </article>
          )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio

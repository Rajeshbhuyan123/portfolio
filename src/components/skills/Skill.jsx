import React from 'react'
import './skill.css'
import {BsFillCartCheckFill} from 'react-icons/bs'

const Skill = () => {
  return (
    <section id='skills'>
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        <div className="web">
          <h3>Web Development</h3>
        <div className="skill_content">
          <article className='skill_details'>
              <BsFillCartCheckFill className='skill-details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='skill_details'>
              <BsFillCartCheckFill className='skill-details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='skill_details'>
              <BsFillCartCheckFill className='skill-details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='skill_details'>
              <BsFillCartCheckFill className='skill-details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='skill_details'>
              <BsFillCartCheckFill className='skill-details-icon'/>
              <div>
              <h4>firebase</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='skill_details'>
              <BsFillCartCheckFill className='skill-details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Skill

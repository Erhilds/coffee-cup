import React from 'react'
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import '../index.scss'
import content from '../content'

function Coffee() {
  // eslint-disable-next-line
  const project = content.map(el =>
    
    <Link to={ `/watch/${ el.id }` } key={ el.id }>
      <div className="">    
        <img className="" src={el.thumb} alt={el.title} />
        <div className="">
          <div className="">{el.title}</div>
        </div>
      </div>
    </Link>
)
  return (
    <>
      <div className="">
        <div>
          <div className="illustration"></div>
          <div className="description">
            Coffee-cup is a collection about my css-animation works.
            I love coffee more than any drinks, and and beside that i love css too.
            although sometimes it's painfull to write it from scratch
          </div>
        </div>
      </div>
    </>
  )
}

export default Coffee
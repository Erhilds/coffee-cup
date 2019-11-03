import React from 'react'
// eslint-disable-next-line
import { Route, Link } from 'react-router-dom'
import '../../index.scss'
import content from '../content'
import Preview from './Preview'

function Coffee() {
  // eslint-disable-next-line
  const project = content.map(el =>
    <Link to={ `/preview/${ el.id }` } key={ el.id } className="content">
      <img  src={el.thumb} alt={el.title} />
      <h4 >{el.title}</h4>
    </Link>
  )
  return (
    <div className="main">
      <div className="preload">
        <div className="cover" />
        <div className="icon" />
      </div>
      <div className="title">
        <div className="illustration"></div>
        <div className="description">
          Coffee-cup is a collection about my css-animation works.
          I love coffee more than any drinks, and beside that i love CSS too.
          although sometimes it's painfull to write it from scratch
        </div>
      </div>
      <div className="modal-watch">
        <Route exact path="/preview/:coffeeKind" component={ Preview } />
      </div>
      <div className="article">
        { project }
      </div>
    </div>
  )
}

export default Coffee
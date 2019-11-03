import React from 'react'
import { Link } from 'react-router-dom'
import content from '../content'

export default (props) => {
  const coffeeId = props.match.params.coffeeKind
  const preview_content = {}

  try {
    for (const coffee of content) {
      if (coffee.id === coffeeId) {
        Object.assign(preview_content, coffee)
      }
    }
  } catch (error) {
    console.log("No such content");
    console.log(error);
    
  }

  return (
    <div className="content">
      <div className="w-thumb">
        <img src={ preview_content.thumb } alt={ preview_content.title }/>
      </div>
      <div className="w-title">
        { preview_content.title }
      </div>
      <div className="w-see">
        <a href={ preview_content.link } rel="noopener noreferrer" target="_blank"> See the page </a>
      </div>
      <div className="w-close">
        <Link to="/">
          <div /><div />
        </Link>
      </div>
    </div>
  )
}
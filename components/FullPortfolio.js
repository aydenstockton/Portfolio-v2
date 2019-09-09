import React from 'react'
import ProjectAPI from '../Api'
import { Link } from 'react-router-dom'
import Thumbnail from './Thumbnail'

// The FullPortfolio iterates over all of the projects and creates
// a link to their project page.
const FullPortfolio = () => (
  <div>
    <ul>
      {
        ProjectAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/work/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
      {
          ProjectAPI.all().map(p => (
              <Thumbnail src={p.src} name={p.name}/>
          ))
      }
  </div>
)

export default FullPortfolio

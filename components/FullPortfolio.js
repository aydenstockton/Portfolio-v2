import React from 'react'
import ProjectAPI from '../api'
import { Link } from 'react-router-dom'

// The FullPortfolio iterates over all of the projects and creates
// a link to their project page.
const FullPortfolio = () => (
  <div>
    <ul>
      {
        ProjectAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/portfolio/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullPortfolio

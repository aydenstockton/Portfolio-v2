import React from 'react'
import ProjectAPI from '../api'
import { Link } from 'react-router-dom'

// The Project looks up the project using the number parsed from
// the URL's pathname. If no Project is found with the given
// number, then a "Project not found" message is displayed.
const Project = (props) => {
  const project = ProjectAPI.get(
    parseInt(props.match.params.project, 10)
  )
  console.log(props)
  if (!project) {
    return <div>Sorry, but the Project was not found</div>
  }
  return (
    <div>
      <h1>{project.name} (#{project.number})</h1>
      <h2>Description: {project.description}</h2>
      <Link to='/work'>Back</Link>
    </div>
  )
}

export default Project

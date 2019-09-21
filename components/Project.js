import React from 'react';
import ProjectAPI from '../Api';
import { Link } from 'react-router-dom';
import ProjectRow from './ProjectRow';
import ProjectIntro from "./ProjectIntro";

const Rows = ({layout}) => (
    layout.map((row, index) => (
        <ProjectRow
            title={row.title}
            description={row.description}
            image={row.img}
        />
    ))
)

// The Project looks up the project using the number parsed from
// the URL's pathname. If no Project is found with the given
// number, then a "Project not found" message is displayed.
const Project = (props) => {
  const project = ProjectAPI.get(
    parseInt(props.match.params.project, 10)
  );

  if (!project) {
    return <div>Sorry, but the Project was not found</div>
  }
  return (
    <div className="project-page">
      <h1>{project.name} (#{project.number})</h1>
      <h2>Description: {project.description}</h2>

        <ProjectIntro/>
        {
            project.layout &&
                <Rows layout={project.layout} />
        }
      <Link to='/work'>Back</Link>
    </div>
  )
};

export default Project

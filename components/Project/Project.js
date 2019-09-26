import React from 'react';
import ProjectAPI from '../../Api';
import { Link } from 'react-router-dom';
import ProjectRow from '../ProjectRow';
import Intro from "../Intro";
import "./styles.pcss";

const Rows = ({layout}) => (
    layout.map((row, index) => (
        <ProjectRow
            title={row.title}
            description={row.description}
            image={row.img}
        />
    ))
)

const ProjectIntro = ({intro}) => (
    <div>
        <div intro="seperator">
            <h1>{intro.name}</h1>
            <Intro blocks={intro.introLeft}/>
        </div>
        <div intro="seperator">
            <Intro blocks={intro.introRight}/>
        </div>
    </div>
);


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
    <div id={project.id} theme={project.theme}>
        <div project="intro">
            <ProjectIntro intro={project}/>
        </div>
        <div className="project-page">
            {
                project.layout &&
                    <Rows layout={project.layout} />
            }
          <Link to='/work'>Back</Link>
        </div>
    </div>
  )
};

export default Project

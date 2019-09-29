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
        <h1>{intro.name}</h1>
        <div>
            <div intro="seperator">
                <Intro blocks={intro.introLeft}/>
            </div>
            <div intro="seperator">
                <Intro blocks={intro.introRight}/>
            </div>
        </div>
    </div>
);

const Hero = ({project}) => (
    <div>
        <div>
            <svg>{project.logo}</svg>
        </div>
        <div>
            <img src={project.hero}/>
        </div>
    </div>
);

// The Project looks up the project using the number parsed from
// the URL's pathname. If no Project is found with the given
// number, then a "Project not found" message is displayed.

const ProjectWrapper = ({project}) => {
    return (
        <div id={project.id} theme={project.theme}>
            <div project="intro">
                <Hero />
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

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const project = ProjectAPI.get(
          parseInt(this.props.match.params.project, 10)
        );
        let theme = "universe";
        if(project.theme) {
            theme = project.theme;
        }
        document.getElementsByTagName("BODY")[0].setAttribute("theme", theme);

        return (
            <ProjectWrapper project={project}/>
        )
    }
};

export default Project

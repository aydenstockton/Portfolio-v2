import React from 'react';
import ProjectAPI from '../../Api';
import { Link } from 'react-router-dom';
import ProjectRow from '../ProjectRow';
import Intro from "../Intro";
import "./styles.pcss";
import { Parallax } from 'react-scroll-parallax';

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

const Hero = ({logo, hero}) => (
    <div project="hero">
        <div>
            <img src={logo}/>
        </div>
        <div>
            <Parallax className="banner" y={[-20, 20]} tagOuter="figure">
                <img src={hero}/>
            </Parallax>
        </div>
    </div>
);

// The Project looks up the project using the number parsed from
// the URL's pathname. If no Project is found with the given
// number, then a "Project not found" message is displayed.

const ProjectWrapper = ({project}) => {
    return (
        <div id={project.id} theme={project.theme} type="project">
            <div intro="wrapper">
                <div>
                    <Hero hero={project.hero} logo={project.logo}/>
                </div>
                <div project="intro">
                    <ProjectIntro intro={project}/>
                </div>
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

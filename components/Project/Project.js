import React from 'react';
import ProjectAPI from '../../ProjectAPI';
import { Link } from 'react-router-dom';
import Intro from "../Intro";
import "./styles.pcss";
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal';


const Rows = ({layout}) => (
    layout.map((row, index) => (
        <ProjectRow
            title={row.title}
            description={row.description}
            image={row.img}
            video={row.video}
            layout={row.type}
            size={row.size}
        />
    ))
)

const ProjectRow = ({title, description, image, video, layout, size}) => (
    <div className="project-piece" layout={layout} >
        <Fade>
            {(title || description) &&
            <div className="project-description">
                <div>
                    {title &&
                    <title>
                        {title}
                    </title>
                    }
                    {description &&
                    <p>
                        {description}
                    </p>
                    }
                </div>
            </div>
            }
        </Fade>
        <Fade bottom>
            {(image || video) &&
            <div>
                {image &&
                <div className="project-image">
                    <img src={image}/>
                </div>
                }
                {video &&
                <div className="project-video" size={size}>
                    <video playsInline autoPlay loop muted>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                }
            </div>
            }
        </Fade>
    </div>
)

const ProjectIntro = ({intro}) => (
    <div>
        <Fade bottom>
            <h1>{intro.name}</h1>
        </Fade>
        <Fade bottom cascade>
            <div>
                <div intro="seperator">
                    <Intro blocks={intro.introLeft}/>
                </div>
                <div intro="seperator">
                    <Intro blocks={intro.introRight}/>
                </div>
            </div>
        </Fade>
    </div>
);

const Hero = ({logo, hero}) => (
    <div project="hero">
        <div>
            <Fade top>
                <img src={logo}/>
            </Fade>
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
                    <Rows layout={project.layout}/>
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

    render() {
        const project = ProjectAPI.get(
          this.props.match.params.projectID
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

import React from 'react';
import Fade from 'react-reveal';

/*
       <ProjectRow
            title="one put a hole in the box"
            description="two put your junk in that box"
            image="img/dick.png"
       >
*/
const ProjectRow = ({title, description, image}) => (
    <div className="project-piece">
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
            {image &&
                <div className="project-image">
                    <img src={image}/>
                </div>
            }
        </Fade>
    </div>
)

export default ProjectRow;
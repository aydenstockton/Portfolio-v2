import React from 'react';
import Fade from 'react-reveal';

/*
       <ProjectRow
            title="one put a hole in the box"
            description="two put your junk in that box"
            image="img/dick.png"
       >
*/
const ProjectRow = ({title, description, image, video, layout, size}) => (
    <div className="project-piece" layout={layout} size={size}>
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
                    <div className="project-video">
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

export default ProjectRow
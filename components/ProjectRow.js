import React from 'react';


/*
       <ProjectRow
            title="one put a hole in the box"
            description="two put your junk in that box"
            image="img/dick.png"
       >
*/
const ProjectRow = ({title, description, image}) => (
    <div className="project-piece">
        <div className="project-description">
            <div>
                {title &&
                    <title>
                        {title}
                    </title>
                }
                <p>
                    {description}
                </p>
            </div>
        </div>
        {image &&
            <div className="project-image">
                <img src={image}/>
            </div>
        }
    </div>
)

export default ProjectRow;
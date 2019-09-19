import React from 'react';


/*
       <ProjectRow
            title="one put a hole in the box"
            description="two put your junk in that box"
            image="img/dick.png"
       >
*/
const ProjectRow = ({title, description, image}) => (
    <div>
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
        {image &&
            <div>
                <img src={image}/>
            </div>
        }
    </div>
)

export default ProjectRow;
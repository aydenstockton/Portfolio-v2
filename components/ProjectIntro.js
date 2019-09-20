import React from 'react';
import ProjectRow from "./ProjectRow";


const IntroBlocks = ({intro}) => (
    layout.map((row, index) => (
        <ProjectRow
            title={row.title}
            description={row.description}
            image={row.img}
        />
    ))
)

const ProjectIntro = ({name, overview, problem, goal, contributions, constraints}) => (
    <div>
        <div>
            {name}
        </div>
        <div>
            <div>
                {overview &&
                    <overview>
                        {overview}
                    </overview>
                }
                {problem &&
                    <problem>
                        {problem}
                    </problem>
                }
                {goal &&
                    <goal>
                        {goal}
                    </goal>
                }
            </div>
            <div>
                {contributions &&
                    <contributions>
                        {contributions}
                    </contributions>
                }
                {constraints &&
                    <constraints>
                        {constraints}
                    </constraints>
                }
            </div>
        </div>
    </div>
)

export default ProjectIntro;
import React from 'react';
import IntroBlock from "./IntroBlock.js"

const ProjectIntro = ({overview, problem, goal, concept, contributions, constraints}) => (
    <div>
        <div>
            <IntroBlock>
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
                {concept &&
                    <concept>
                        {concept}
                    </concept>}
            </IntroBlock>
            <IntroBlock>
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
            </IntroBlock>
        </div>
    </div>
);

export default ProjectIntro
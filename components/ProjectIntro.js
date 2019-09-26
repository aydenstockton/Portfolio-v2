import React from 'react';
import IntroBlock from "./IntroBlock.js";
import Intro from './Intro.js'


const ProjectIntro = ({intro, overview, problem, goal, concept, contributions, constraints}) => (
    <div>
        <div>
            <Intro blocks={intro.intro}/>
           <IntroBlock intro={intro}>
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
            <IntroBlock intro={intro}>
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
import React from 'react';
import IntroBlock from "./IntroBlock.js";
import Intro from './Intro.js'


const ProjectIntro = ({intro, overview, problem, goal, concept, contributions, constraints}) => (
    <div>
           <Intro blocks={intro.intro}/>
           <div intro="seperator">
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
            </div>
            <div>
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
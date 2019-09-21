import React from 'react';


const IntroBlockData = ({intro}) => (
    intro.map((string, index) => (
        <IntroBlock
            overview={string.overview}
            problem={string.problem}
            goal={string.goal}
            concept={string.concept}
            contributions={string.contributions}
            constraints={string.constraints}
        />
    ))
)

const ProjectIntro = ({overview, problem, goal, concept, contributions, constraints}) => (
    <div>
        <div>
            <IntroBlockData>
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
            </IntroBlockData>
            <IntroBlockData>
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
            </IntroBlockData>
        </div>
    </div>
);

export default ProjectIntro
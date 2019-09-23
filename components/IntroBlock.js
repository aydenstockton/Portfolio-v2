import React from 'react';
/*
<IntroBlock
    title="OVERVIEW" <= I want to access the properties individually within the intro property and return the property as an ALL CAPS string.
    description="This project overview is this" <= I want the description to know which title it is associated with and input the correct paragraph
>
*/

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

const IntroBlock = ({intro}) => (
    <div>
        <div>
            {intro.title}
        </div>
        <div>
            {intro.description}
        </div>
    </div>
)

export default IntroBlock
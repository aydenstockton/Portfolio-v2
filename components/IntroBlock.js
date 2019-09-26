import React from 'react';
/*
<IntroBlock
    title="OVERVIEW" <= I want to access the properties individually within the intro property and return the property as an ALL CAPS string.
    description="This project overview is this" <= I want the description to know which title it is associated with and input the correct paragraph
>
*/

const IntroBlockData = ({intro}) => (
    <div>
        <div>
             {intro.title}
        </div>
        <div>
            {intro.description}
        </div>
    </div>
)

const IntroBlock = ({intro}) => (
    <IntroBlockData
        intro={intro}
    />

)

export default IntroBlock
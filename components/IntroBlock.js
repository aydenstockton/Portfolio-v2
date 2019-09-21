import React from 'react';
/*
<IntroBlock
    title="OVERVIEW" <= I want to access the properties individually within the intro property and return the property as an ALL CAPS string.
    description="This project overview is this" <= I want the description to know which title it is associated with and input the correct paragraph
>
*/

const IntroBlock = ({intro}) => (
    <div>
        <div>
            {intro.key}
        </div>
        <div>
            {intro.value}
        </div>
    </div>
)

export default IntroBlock
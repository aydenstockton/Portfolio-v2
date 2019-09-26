import React from 'react';
import Block from './Block/Block'

const Blocks = ({blocks}) => (
    blocks.map((block, index) => (
        <Block block={block}/>
    ))
)

const Intro = ({blocks}) => (
    <Blocks blocks={blocks}/>
)

export default Intro
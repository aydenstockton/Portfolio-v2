import React from "react";
import Block from "./Block/Block";
import Fade from "react-reveal";

const Blocks = ({blocks}) => (
    blocks.map((block, index) => (
        <Fade bottom>
            <Block block={block}/>
        </Fade>
    ))
)

export default Blocks
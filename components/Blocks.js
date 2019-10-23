import React from "react";
import Block from "./Block/Block";
import Fade from "react-reveal";

const Blocks = ({blocks}) => (
    blocks.map((block, index) => (
            <Block block={block}/>
    ))
)

export default Blocks
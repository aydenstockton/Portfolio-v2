import React from 'react';
import "./styles.pcss";
import Fade from 'react-reveal';
import posed from "react-pose";

const Title = ({title}) => (
    <div type="title">
        {title}
    </div>
)

const Description = ({description}) => (
    <div type="description">
        {description}
    </div>
)

const ListItem = ({item}) => (
    <li type="list">
        {item}
    </li>
)

const ListItems = ({items}) => (
    <ul>
        {items.map((item, index) => (
            <ListItem item={item}/>
        ))}
    </ul>
)

const ContainerChild = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const Block = ({block}) => (
    <ContainerChild>
        <div intro="block">
            <Title title={block.title}/>
            {block.description &&
            <Description description={block.description}/>
            }
            {block.list &&
            <ListItems items={block.list}/>
            }
        </div>
    </ContainerChild>
)

export default Block
import React from 'react';
import "./styles.pcss";
import Fade from 'react-reveal';

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

const Block = ({block}) => (
        <div intro="block">
            <Title title={block.title}/>
            {block.description &&
            <Description description={block.description}/>
            }
            {block.list &&
            <ListItems items={block.list}/>
            }
        </div>
)

export default Block
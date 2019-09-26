import React from 'react';
import "./styles.pcss";

const Title = ({title}) => (
    <div>
        {title}
    </div>
)

const Description = ({description}) => (
    <div>
        {description}
    </div>
)

const ListItem = ({item}) => (
    <li>
        {item}
    </li>
)

const ListItems = ({items}) => (
    <ul>
        {items.map((item, index) => (
            <ListItem item={item}
            />
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
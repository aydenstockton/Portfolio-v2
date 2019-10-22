import React from 'react'
import ProjectAPI from '../ProjectAPI'
import Thumbnail from './Thumbnail'

function Thumbnails(props) {
    // const thumbs = ProjectAPI.all();
    const thumbItems = props.thumbs.map((thumb) =>
        <Thumbnail name={thumb.name} src={thumb.src} number={thumb.number} id={thumb.id} />
    );
    return (
        <div className="work-wrapper">{thumbItems}</div>
    );
}

// The FullPortfolio iterates over all of the projects and creates
// a link to their project page.
const FullPortfolio = () => {
    document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

    return (
        <Thumbnails thumbs={ProjectAPI.all()}/>
    )
}

export default FullPortfolio

import React from 'react'
import ProjectAPI from '../ProjectAPI'
import Thumbnail from './Thumbnail'
import posed from "react-pose";
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const ContainerParent = posed.div({
    enter: { staggerChildren: 50 }
});

function Thumbnails(props) {
    // const thumbs = ProjectAPI.all();
    const thumbItems = props.thumbs.map((thumb) =>
        <Thumbnail name={thumb.name} src={thumb.src} number={thumb.number} id={thumb.id} />
    );
    return (
        <ContainerParent className="work-wrapper">{thumbItems}</ContainerParent>
    );
}

// The FullPortfolio iterates over all of the projects and creates
// a link to their project page.
const FullPortfolio = () => {
    document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

    return (
        <React.Fragment>
            <ProjectFilters/>
            <Thumbnails thumbs={ProjectAPI.all()}/>
        </React.Fragment>
    )
}

export default FullPortfolio

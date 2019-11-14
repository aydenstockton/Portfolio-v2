import React from 'react'
import ProjectAPI from '../ProjectAPI'
import Thumbnail from './Thumbnail/Thumbnail'
import posed from "react-pose";
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const ContainerParent = posed.div({
    enter: { staggerChildren: 50 }
});

function Thumbnails(props) {
    // const thumbs = ProjectAPI.all();
    const thumbItems = props.thumbs.map((thumb) =>
        <Thumbnail name={thumb.name} src={thumb.src} number={thumb.number} id={thumb.id} type={thumb.type} />
    );
    return (
        <ContainerParent className="work-wrapper">{thumbItems}</ContainerParent>
    );
}
function getQueryParameters(str) {
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
}
// The Work iterates over all of the projects and creates
// a link to their project page.
class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {type:"all"}
        this.handleType = this.handleType.bind(this);
    }
    handleType(type, e) {
        this.setState({
            type:type
        })

    }

    componentDidMount() {
        let state = this.props.location.state;
        if(!state) {
            return false;
        }

        let type = this.props.location.state.type;
        if(type) {
            this.setState({
                type:type
            });

        }
        console.log(this.props.location.state.type)
    }
    componentDidUpdate() {
    }


    render() {
        document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

        return (
            <div type={this.state.type}>
                <ProjectFilters handleType={this.handleType}/>
                <Thumbnails thumbs={ProjectAPI.all()}/>
            </div>
        )
    }
}

export default Work

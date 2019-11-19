import React from 'react'
import ProjectAPI from '../ProjectAPI'
import Thumbnail from './Thumbnail/Thumbnail'
import posed, { PoseGroup }from "react-pose";
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const ContainerParent = function(){
 return (
     <div></div>
 )   // enter: { staggerChildren: 50 }
};

function Thumbnails(props) {
    const Item = posed.div({
        enter: { y: 0, opacity: 1 },
        exit: { y: 50, opacity: 0 },
        // flip: {
        //     scale: 1,
        //     transition: {
        //         scale: {
        //             type: 'spring',
        //             velocity: 10
        //         },
        //         default: {
        //             type: 'spring'
        //         }
        //     }
        // }
    })
    const thumbItems = props.thumbs.map((thumb) =>
        <Item key={thumb.number}>
            <Thumbnail name={thumb.name} src={thumb.src} number={thumb.number} id={thumb.id}/>
        </Item>
            );
    return (
        <div className="work-wrapper">
            <PoseGroup>{thumbItems}</PoseGroup>
        </div>
    );
}
// The Work iterates over all of the projects and creates
// a link to their project page.
class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type:"all",
            projects:ProjectAPI.all()
        }
        this.handleType = this.handleType.bind(this);
    }
    handleType(type, e) {
        this.setState({
            type:type,
            projects:ProjectAPI.byProperty({type:type})
        });
    }

    componentDidMount() {
        // setInterval(() => {
        //     var a = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
        //     this.setState({
        //         projects: ProjectAPI.all()[2]
        //     });
        // }, 1000);

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
    }
    componentDidUpdate() {
    }


    render() {
        document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

        return (
            <div type={this.state.type}>
                <ProjectFilters handleType={this.handleType}/>
                <Thumbnails thumbs={this.state.projects}/>
            </div>
        )
    }
}

export default Work

import React from 'react'
import AboutAPI from "../../AboutAPI";
import Blocks from "../Blocks";
import "./styles.pcss";
import Fade from 'react-reveal';
import posed from "react-pose";

const ContainerParent = posed.div({
    enter: { staggerChildren: 50 }
});

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = AboutAPI.all();

        document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");
        document.getElementsByTagName("BODY")[0].setAttribute("page", "about");

        return (
            <ContainerParent type="aboutpage">
                <div type="vanity">
                    <img src="/img/hoa-gradient.png"/>
                </div>

                <div type="aboutblocks">
                        <Blocks blocks={list}/>
                </div>
            </ContainerParent>
        )
    }
}

export default AboutPage
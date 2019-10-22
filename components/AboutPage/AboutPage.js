import React from 'react'
import AboutAPI from "../../AboutAPI";
import Blocks from "../Blocks";
import "./styles.pcss";
import Fade from 'react-reveal';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = AboutAPI.all();

        document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

        return (
            <aboutpage>
                <me>
                    <img src=""/>
                </me>

                <div type="aboutblocks">
                        <Blocks blocks={list}/>
                </div>
            </aboutpage>
        )
    }
}

export default AboutPage
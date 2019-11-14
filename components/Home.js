import React from 'react';
import HeySmall from './HeySmall';
import WelcomeTo from'./WelcomeTo';
import IDesignSmall from './IDesignSmall';
import PDesignerSmall from "./PDesignerSmall";
import VDesignerSmall from "./VDesignerSmall";
import MDesigner from "./MDesigner";
import posed from "react-pose";
import {NavLink, Link} from "react-router-dom";

const ContainerParent = posed.div({
    enter: { staggerChildren: 50 }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active:"all"
        }

        this.handleActive = this.handleActive.bind(this);
        this.handleInactive = this.handleInactive.bind(this);
    }
    handleActive(id, e) {
        var thix = this;
        clearTimeout(window.timer)
        window.timer = setTimeout(function() {
            thix.setState({
                active:id
            })
        }, 400);
    }
    handleInactive() {
        this.setState({
            active:"all"
        })
        clearTimeout(window.timer)
    }
    render() {
        return (
            <div className="Welcome" key="welcome" active={this.state.active}>
                <div id="hey-ticker" onMouseEnter={(e) => this.handleActive("hey", e)} onMouseLeave={this.handleInactive}>
                    <HeySmall/>
                    <HeySmall/>
                    <Link to='/about'/>
                </div>
                <div>
                    <WelcomeTo/>
                    <WelcomeTo/>
                </div>
                <div>
                    <IDesignSmall/>
                    <IDesignSmall/>
                </div>
                <div id="product-ticker" onMouseEnter={(e) => this.handleActive("product-ticker", e)} onMouseLeave={this.handleInactive}>
                    <PDesignerSmall/>
                    <PDesignerSmall/>
                    <Link to={{
                        pathname: '/work',
                        state: {type: 'product'}
                    }}
                    />
                </div>
                <div id="visual-ticker" onMouseEnter={(e) => this.handleActive("visual-ticker", e)} onMouseLeave={this.handleInactive}>
                    <VDesignerSmall/>
                    <VDesignerSmall/>
                    <Link to={{
                        pathname: '/work',
                        state: {type: 'visual'}
                    }}
                    />
                </div>
                <div id="motion-ticker" onMouseEnter={(e) => this.handleActive("motion-ticker", e)} onMouseLeave={this.handleInactive}>
                    <MDesigner/>
                    <MDesigner/>
                    <Link to='/play'/>
                </div>
                <video playsInline autoPlay loop muted id="productvideo">
                    <source src="/img/test-video.mp4" type="video/mp4"/>
                </video>
                <video playsInline autoPlay loop muted id="visualvideo">
                    <source src="/img/den-video.mp4" type="video/mp4"/>
                </video>
                <video playsInline autoPlay loop muted id="motionvideo">
                    <source src="/img/mdesigner.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }

}
export default Home;

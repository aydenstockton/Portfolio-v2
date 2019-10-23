import React from 'react';
import Hey from './Hey';
import WelcomeTo from'./WelcomeTo';
import IDesign from './IDesign';
import PDesigner from './PDesigner';
import VDesigner from "./VDesigner";

const Home = () => (

  <div className="Welcome">
    {/*<h1>Hey, I'm Ayden. </h1>*/}
    {/*<h1>Welcome to my online portfolio.</h1>*/}
    {/*<h1>I design a lot of things.</h1>*/}
    {/*<h1>I’m a Product Designer.</h1>*/}
    {/*<h1>I’m a Visual Designer.</h1>*/}
    {/*<h1>I’m a Motion Designer.</h1>*/}
    <div>
         <Hey/>
         <Hey/>
         <Hey/>
    </div>
    <div>
        <WelcomeTo/>
        <WelcomeTo/>
    </div>
    <div id="idesigntop">
       <IDesign/>
       <IDesign/>
    </div>
    <div id="product">
         <PDesigner/>
         <PDesigner/>
    </div>
    <div id="visual">
          <VDesigner/>
          <VDesigner/>
    </div>
    <video playsinline autoPlay loop muted id="productvideo">
          <source src="/img/test-video.mp4" type="video/mp4"/>
    </video>
    <video playsinline autoPlay loop muted id="visualvideo">
          <source src="/img/den-video.mp4" type="video/mp4"/>
    </video>
  </div>
);

export default Home;

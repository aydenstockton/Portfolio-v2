import React from 'react';
import Hey from './Hey';
import WelcomeTo from'./WelcomeTo';
import IDesign from './IDesign';
import PDesigner from './PDesigner';
import VDesigner from "./VDesigner";
import HeySmall from './HeySmall';
import IDesignSmall from './IDesignSmall';
import PDesignerSmall from "./PDesignerSmall";
import VDesignerSmall from "./VDesignerSmall";
import MDesigner from "./MDesigner";

const Home = () => (

  <div className="Welcome" key="welcome">
    <div>
         <HeySmall/>
         <HeySmall/>
    </div>
    <div>
        <WelcomeTo/>
        <WelcomeTo/>
    </div>
    <div id="idesign-ticker">
       <IDesignSmall/>
       <IDesignSmall/>
    </div>
    <div id="product-ticker">
         <PDesignerSmall/>
         <PDesignerSmall/>
    </div>
    <div id="visual-ticker">
          <VDesignerSmall/>
          <VDesignerSmall/>
    </div>
      <div id="motion-ticker">
          <MDesigner/>
          <MDesigner/>
      </div>
    <video playsInline autoPlay loop muted id="productvideo">
          <source src="/img/test-video.mp4" type="video/mp4"/>
    </video>
    <video playsInline autoPlay loop muted id="visualvideo">
          <source src="/img/den-video.mp4" type="video/mp4"/>
    </video>
  </div>
);

export default Home;

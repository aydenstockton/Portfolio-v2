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
    <div>
       <IDesign/>
       <IDesign/>
    </div>
    <div>
         <PDesigner/>
         <PDesigner/>
    </div>
    <div>
          <VDesigner/>
          <VDesigner/>
    </div>
  </div>
);

export default Home;

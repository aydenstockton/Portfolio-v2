// import React from 'react';
// import Block from './Block/Block'
// import AboutAPI from '../AboutAPI'
// import ProjectRow from "./ProjectRow";
// import ProjectAPI from "../ProjectAPI";
//
// // const About = () => (
// //     <div>
// //         <div>
// //             <img src=""/>
// //         </div>
// //         <div>
// //             <AboutLayout/>
// //         </div>
// //     </div>
// // );
//
// // const AboutLayout = ({layout}) => (
// //     AboutAPI.all().map((stuff, index) => (
// //         <About
// //             title={stuff.title}
// //             description={stuff.description}
// //         />
// //     ))
// //     return (
// //             <About/>
// //     )
// // )
//
// const AboutsWrapper = ({children}) => {
//
//
//     return (
//
//     )
// }
//
// const Abouts = ({data}) => (
//     data.map((stuff, index) => (
//         <About
//             title={stuff.title}
//             description={stuff.description}
//         />
//     ))
// )
// const AboutWrapper = ({title, description}) => (
//     <div>
//         <div>
//             <img src=""/>
//         </div>
//         <div>
//             {title}
//         </div>
//         <div>
//             {description}
//         </div>
//     </div>
// )
// class About extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const data = AboutAPI.all();
//         const abouts =
//
//         return (
//             <AboutsWrapper>{abouts}</AboutsWrapper>
//         )
//     }
// };
//
// export default About
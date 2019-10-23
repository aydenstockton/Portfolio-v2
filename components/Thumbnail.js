import React from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal';
import posed from "react-pose";

const ContainerChild = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const Thumbnail = ({name, src, number, id}) => (
        <Link to={`/work/${id}`}>
            <ContainerChild>
                <div className="Thumbnail" key={number}>
                    <div className="picture-wrapper">
                        <img src={src}/>
                    </div>
                    <div className="name-wrapper">
                        <p>{name}</p>
                    </div>
                </div>
            </ContainerChild>
        </Link>
);

export default Thumbnail
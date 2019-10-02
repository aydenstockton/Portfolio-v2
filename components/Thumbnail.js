import React from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal';

const Thumbnail = ({name, src, number}) => (
        <Link to={`/work/${number}`}>
            <Fade bottom cascade>
                <div className="Thumbnail" key={number}>
                    <div className="picture-wrapper">
                        <img src={src}/>
                    </div>
                    <div className="name-wrapper">
                        <p>{name}</p>
                    </div>
                </div>
            </Fade>
        </Link>
);

export default Thumbnail
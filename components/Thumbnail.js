import React from 'react';
import {Link} from "react-router-dom";


const Thumbnail = ({name, src, number}) => (
        <Link to={`/work/${number}`}>
            <div className="Thumbnail" key={number}>
                <div className="picture-wrapper">
                    <img src={src}/>
                </div>
                <div className="name-wrapper">
                    <p>{name}</p>
                </div>
            </div>
        </Link>
);

export default Thumbnail
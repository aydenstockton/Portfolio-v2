import React from 'react';
import ProjectAPI from "../Api";
import {Link} from "react-router-dom";
import ImageView from "./ImageView";


const Thumbnail = ({name, src}) => (
    ProjectAPI.all().map(p => (
        <Link to={`/work/${p.number}`}>
            <div className="Thumbnail" key={p.number}>
                <div className="picture-wrapper">
                    <img src={p.src}/>
                </div>
                <div className="name-wrapper">
                    <p>{p.name}</p>
                </div>
            </div>
        </Link>
     )
));

export default Thumbnail
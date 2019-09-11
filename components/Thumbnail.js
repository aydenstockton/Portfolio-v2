import React from 'react';
import ProjectAPI from "../Api";
import {Link} from "react-router-dom";


const Thumbnail = ({name, src}) => (
    ProjectAPI.all().map(p => (
        <div className="Thumbnail" key={p.number}>
            <Link to={`/work/${p.number}`}>{p.name}</Link>
            <div>
                <img src={src}/>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
     )
));

export default Thumbnail
import React from 'react';


const Thumbnail = ({name, src}) => (
    <div className="Thumbnail">
        <div>
            <img src={src}/>
        </div>
        <div>
            <p>{name}</p>
        </div>
    </div>
);

export default Thumbnail
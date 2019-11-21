import React from 'react';
import {Link} from "react-router-dom";
import posed from "react-pose";
import './styles.pcss';
import Image from 'react-image-webp';

// const ContainerChild = posed.div({
//     // enter: { y: 0, opacity: 1 },
//     // exit: { y: 50, opacity: 0 }
// });

const Thumbnail = ({name, src, number, id, type, webp}) => (
        <Link to={`/work/${id}`} type={type}>
                <div className="Thumbnail" key={number}>
                    <div className="picture-wrapper">
                        <Image
                            webp={src + '.webp'}
                            src={src + '.png'}
                        />
                    </div>
                    <div className="name-wrapper">
                        <p>{name}</p>
                    </div>
                </div>

        </Link>
);

export default Thumbnail
import React from 'react';
import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';
import PlayAPI from "../../PlayAPI";
import InfiniteGrid, {GridLayout} from "@egjs/infinitegrid";
import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    render() {
        const childElements = PlayAPI.all().map(function(x){
            return (
                <li className="image-element-class">
                    {x.image ? (
                        <img src={x.image} />
                        ) : (
                    <video  src={x.video} playsInline autoPlay loop muted/>
                        )
                    }
                </li>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;

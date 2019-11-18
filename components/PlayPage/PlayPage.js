import React from 'react';
import PlayAPI from "../../PlayAPI";
import Masonry from 'react-masonry-component';
import "./styles.pcss";
import posed from "react-pose";

const ContainerChild = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
    render() {
        const childElements = PlayAPI.all().map(function(x){
            return (
                    <div className="masonry-element">
                                {x.image ? (
                                    <img src={x.image} />
                                    ) : (
                                <video  src={x.video} playsInline autoPlay loop muted/>
                                    )
                                }
                    </div>
            );
        });

        return (
            <div className='play-center'>
                    <Masonry
                        className={'play-layout'} // default ''
                        elementType={'div'} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                    >
                        {childElements}
                    </Masonry>
            </div>
        );
    }
}

export default Gallery;

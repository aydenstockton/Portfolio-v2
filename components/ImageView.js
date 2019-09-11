import React from 'react'

function Image({ src }) {
    return (
        <img
            src={src}
        />
    );
}

const ImageView = ({src}) => (
        <div>
            <Image src={src} />
        </div>
)

export default ImageView

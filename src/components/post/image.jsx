import PropTypes from 'prop-types';
// Image props will be the image source and the caption {image, caption}


export default function Image({image, caption}) {
    return (
        <div>
            <img src={image} alt={caption} className="w-full h-auto" />
        </div>
    )
};

Image.propTypes = {
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
}
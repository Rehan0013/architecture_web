import { images } from "../data";

const Image = () => {
    return (
        <div className="image-parent">
            <div className="image-child">
                {images.map((image) => (
                    <img src={image.img} alt={image.title} />
                ))}
            </div>
        </div>
    )
}

export default Image;
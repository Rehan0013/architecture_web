import { projects } from "../data";

const Image = () => {
    return (
        <div className="image-parent">
            <div className="image-child">
                {projects.map((project) => (
                    <img src={project.img} alt={project.title} />
                ))}
            </div>
        </div>
    )
}

export default Image;
import ProjectItem from "./ProjectItem";

export default function ProjectList(props) {
    const projects = props.projects

    return (
        <div className="flex flex-col gap-3">
            {projects.map((project) => (
                <ProjectItem key={project._id} project={project} />
            ))}
        </div>
    )
}
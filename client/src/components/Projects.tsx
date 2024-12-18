import { useGetProjects } from "../hooks/useGetProjects";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";

const Projects = () => {
      const { data, isLoading, error } = useGetProjects();
      if (isLoading) return <Spinner/>;
      if (error) return <div>Error: {error.message}</div>;
    
  return (
    <>
      {data?.projects?.length ? (
        <div className="row mt-4">
          {data?.projects.map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

export default Projects
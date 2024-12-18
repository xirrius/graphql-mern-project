import { Trash } from "lucide-react";
import { useDeleteProject } from "../hooks/useDeleteProject";
import { useNavigate } from "react-router-dom";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();
  const { mutate: deleteProject } = useDeleteProject();
  const handleDelete = () => {
    navigate(-1);
    deleteProject(projectId);
  };
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={handleDelete}>
        <Trash /> Delete Project
      </button>
    </div>
  );
};
export default DeleteProjectButton;

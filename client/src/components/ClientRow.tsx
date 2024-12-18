import { Trash } from "lucide-react";
import { useDeleteClient } from "../hooks/useDeleteClient";
const ClientRow = ({ client }) => {
    const { mutate: deleteClient, isLoading } = useDeleteClient();
    const handleDelete = () => {
      deleteClient(client?.id);
    };

  return (
    <tr>
      <td>{client?.name}</td>
      <td>{client?.email}</td>
      <td>{client?.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleDelete}
          disabled={isLoading}
        >
          <Trash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;

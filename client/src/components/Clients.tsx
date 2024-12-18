import { useGetClients } from "../hooks/useGetClients";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

const Clients = () => {
  const { data, isLoading, error } = useGetClients();

  if (isLoading) return <Spinner/>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <h1>Clients</h1>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.clients.map((client) => (
            <ClientRow key={client?.id} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Clients
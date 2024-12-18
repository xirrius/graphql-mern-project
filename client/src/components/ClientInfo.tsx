import { Badge, Mail, Phone } from "lucide-react";

const ClientInfo = ({client}) => {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <Badge/> {client?.name}
        </li>
        <li className="list-group-item">
          <Mail /> {client?.email}
        </li>
        <li className="list-group-item">
          <Phone className="icon" /> {client?.phone}
        </li>
      </ul>
    </>
  );
}
export default ClientInfo
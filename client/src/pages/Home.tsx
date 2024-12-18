import AddClientForm from "../components/AddClientForm";
import AddProjectForm from "../components/AddProjectForm";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientForm />
        <AddProjectForm />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
export default Home
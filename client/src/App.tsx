import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

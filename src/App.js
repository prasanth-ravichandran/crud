import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateStudent from "./Components/CreateStudent";
import Student from "./Components/Student";
import ViewStudent from "./Components/ViewStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
          <Route path="/ViewStudent/:id" element={<ViewStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Common from "./components/Common";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Home />} />
        <Route path="/edit" element={<Edit />}>
          <Route path=":id" element={<Common />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

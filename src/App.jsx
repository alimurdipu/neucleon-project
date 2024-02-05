import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Monitor from "./pages/Monitor/Monitor";
import Lock from "./pages/Lock/Lock";
import BankModal from "./pages/BankModal/BankModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/overview" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="lock" element={<Lock />} />
          <Route path="bank" element={<BankModal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

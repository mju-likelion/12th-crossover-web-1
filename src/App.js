import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Join from "./pages/Join";
import Write from "./pages/Write";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/boards/page" element={<Main />} />
        <Route path="/auth/signin" element={<Join />} />
        <Route path="/boards" element={<Write />} />
        <Route path="/boards/:boardId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

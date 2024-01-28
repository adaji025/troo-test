import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import LoggedInContainer from "./components/LoggedIn";
import "@mantine/core/styles.css";

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const token = localStorage.getItem("troo_token");

  if (token && location.pathname === "/") {
    navigate("/overview")
  }
  return (
    <MantineProvider
      theme={{
        primaryColor: "green",
        fontFamily: "Inter, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Notifications position="top-right" />
      <Routes>
        <Route path="/*" element={token ? <LoggedInContainer /> : <Login />} />
      </Routes>
    </MantineProvider>
  );
}

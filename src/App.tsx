import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import LoggedInContainer from "./components/LoggedIn";

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "green",
        fontFamily: "Inter, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<LoggedInContainer />} />
      </Routes>
    </MantineProvider>
  );
}

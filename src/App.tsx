import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </MantineProvider>
  );
}
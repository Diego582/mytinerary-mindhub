import { useState } from "react";
import Home from "./pages/home";
import { Box } from "@mui/material";
import { MainLayout } from "@mui/material";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      {/* <Home /> */}
      <Cities />
    </MainLayout>
  );
}

export default App;

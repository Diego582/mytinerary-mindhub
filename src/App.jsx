import { useState } from "react";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";

function App() {
  return (
    <MainLayout>
       <Home /> 
      {/* <Cities /> */}
    </MainLayout>
  );
}

export default App;

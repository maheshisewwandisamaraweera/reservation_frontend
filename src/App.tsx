import React from "react";
import ForgetPassword from "./components/ForgetPassword";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";



const App: React.FC = () => {
  return (
    <>
      <ForgetPassword />
    </>
  );
};

export default App;

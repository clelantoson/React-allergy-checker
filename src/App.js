import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Header from "./components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCB44D",
    },
    secondary: {
      main: "#426A5A",
    },
    warning: {
      main: "#FCB44D",
    },
    info: {
      main: "#D7F9FF",
    },
    success: {
      main: "#2DD881",
    },
  },
  typography: { fontFamily: "'Lato', sans-serif" },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Routes />
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

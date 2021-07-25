import "./App.css";
import React, { useRef, Suspense, useState } from "react";
import Animation from "./Animation";
import Box from "@material-ui/core/Box";
import Copy from "./Copy";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Bio from "./Bio";
import { CssBaseline, Slider } from "@material-ui/core";
import { InView } from "react-intersection-observer";
import Header from "./Header";
import Main from "./Main";
import Contact from "./Contact";
import Crop from "./Slider";
import { ParallaxProvider } from "react-scroll-parallax";
let theme = createTheme({
  palette: {
    type: "dark",
    background: {
      default: "#18191a",
    },
  },
  typography: {
    body1: {
      color: "#b0b0b0",
    },
    h1: {
      fontWeight: 700, // or 'bold'
      fontSize: [70, "!important"],
      color: "#ededed",
    },
    fontFamily: [
      "objektiv-mk3",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
theme = responsiveFontSizes(theme);

// Check viewport visibility

function App() {
  const [index, setIndex] = useState();
  console.log(index);
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <CssBaseline />
        <Header />
        <Box
          position="fixed"
          width="100%"
          height="100%"
          top="0"
          zIndex="drawer"
        >
          <Animation index={index} />
        </Box>
        <InView
          as="div"
          threshold={0.1}
          onChange={(inView2, entry) => inView2 && setIndex(2)}
        >
          <Main />
        </InView>
        <Crop copy={"PORTFOLIO"} />
        <InView
          as="div"
          threshold={0.1}
          onChange={(inView, entry) => inView && setIndex(6)}
        >
          <Bio header="Biedronka" />
        </InView>
        <Bio className="App-header noPointer" right={true} header="Orlen" />
        <InView
          as="div"
          threshold={0.1}
          onChange={(inView, entry) => inView && setIndex(1)}
        >
          <Bio header="Jak pracuję" />
        </InView>
        <InView
          as="div"
          threshold={0.1}
          onChange={(inView, entry) => inView && setIndex(0)}
        >
          {" "}
          <Crop copy={"KONTAKT"} />
          <Contact />
        </InView>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;

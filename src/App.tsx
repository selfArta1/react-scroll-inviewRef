import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";
import SectionLayout from "./components/SectionLayout";
import { sections } from "./lib/Types";
import { useRef } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const sectionViewRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Box sx={{ flexGrow: 1, width: 1 }}>
          {sections.map((item, index) => (
            <SectionLayout key={index} item={item} inviewRef={sectionViewRef} />
          ))}
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

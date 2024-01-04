
import MainPage from "./components/MainPage";
import { ThemeProvider  } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import './App.css'

// const theme = createTheme({
//   direction: 'rtl'
// });


function App() {
  return (
    // <ThemeProvider theme={theme}>
      <MainPage />
    // </ThemeProvider>
  )
}

export default App;

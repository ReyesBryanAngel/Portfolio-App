
import MainPage from "./components/MainPage";
import { GlobalDataProvider } from "./context/globalDataProvider";
import './App.css'

function App() {
  return (
    <GlobalDataProvider>
      <MainPage />
    </GlobalDataProvider>
  )
}

export default App;

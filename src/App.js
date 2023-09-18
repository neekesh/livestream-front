import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components"
import { Homepage, Streampage } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/stream" element={<Streampage/>} />
      </Routes>
    </Router>
  );
}

export default App;

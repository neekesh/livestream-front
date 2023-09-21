import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components"
import { Homepage, Streampage } from "./pages";
import { Context } from "./utils/Context";
import LiveStreamIcon from "./images/livestream.png"
import { Provider } from "react-redux";
import { recordingStore } from "./redux/store";

function App() {

  return (
    <Provider store={recordingStore }>
      <Context.Provider
        value={LiveStreamIcon}
      >
        <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/stream" element={<Streampage/>} />
          </Routes>
        </Router>
      </Context.Provider>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './assets/fonts/Montserrat-ExtraBoldItalic.ttf';
import './assets/fonts/Montserrat-Regular.ttf';
import './assets/fonts/Montserrat-Bold.ttf';

import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="teams" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

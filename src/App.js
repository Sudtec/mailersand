import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

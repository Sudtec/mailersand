import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Reset from './Reset';
import ResetPassword from "./ResetPassword";
import PropertiesPage from "./PropertiesPage";
import PropertyPage from "./PropertyPage";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='reset' element={<Reset />} />
          <Route path='resetpassword' element={<ResetPassword />} />
          <Route path='properties' element={<PropertiesPage />} />
          <Route path='propertyPage' element={<PropertyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

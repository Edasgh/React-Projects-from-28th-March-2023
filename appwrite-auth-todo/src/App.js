import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from './components/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/register" element={<Signup/>} />
      <Route exact path="/profile" element={<Profile/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

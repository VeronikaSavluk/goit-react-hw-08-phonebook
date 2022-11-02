import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Home from "../page/Home/Home";
import Register from "page/Register/Register";
import Login from "page/Login.js/Login";
import Contacts from "page/Contacts/Contacts";
// import RestrictedRoute from "./RegisteredRoute";
// import PrivateRoute from "./PrivateRoute";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/contacts" element={<Contacts />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
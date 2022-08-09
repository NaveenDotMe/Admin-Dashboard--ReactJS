import React from "react";
import Login from "../pages/Home/Login";
import HomePage from "../pages/Home/FrontPage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import NotFound from "../pages/Home/Sessions/NotFound";
import UserReg from "../pages/UserReg";

function App() {
    return (
        <Routes>
            {/*<Route excat path="/" element={<HomePage/>}/>*/}
            <Route exact path="login" element={<Login/>}/>
            <Route path="user" element={<UserReg/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;

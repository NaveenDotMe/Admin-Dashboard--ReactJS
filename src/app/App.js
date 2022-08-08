import React from "react";
import Login from "../pages/Home/Login";
import HomePage from "../pages/Home/FrontPage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<HomePage/>}/>
            <Route excat path="login" element={<Login/>}/>
        </Routes>
    );
}

export default App;

import React from "react";
import Login from "../pages/Home/Login";
import HomePage from "../pages/Home/FrontPage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import NotFound from "../pages/Home/Sessions/NotFound";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<HomePage/>}/>
            <Route excat path="login" element={<Login/>}/>
            <Route excat path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;

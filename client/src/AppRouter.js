import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Components/SigninFolder/Signin";
import Signup from "./Components/SignupFolder/Signup";
import Home from "./Components/Home";

function AppRouter(){
    return(
        <Routes>
     
     <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<Signin/>} />

            <Route path="/signup" element={<Signup/>} />
     </Routes>
    )
}

export default AppRouter;
import React from "react"
import { Link } from 'react-router-dom';

import * as path from "../../constants/routes"

const Home = () => {
    return <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1>Home</h1>
        <Link to={path.LOGIN}>Login</Link>
        <Link to={path.SIGNUP}>SignUp</Link>
        <Link to={path.FORGOTPASSWORD}>Forgot Password</Link>
    </div> 
}

export default Home
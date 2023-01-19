import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Logo from "../img/logo1.png";


const NavBar = () => {
    const [user] = useAuthState(auth);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    const signOut = () => {
        auth.signOut();
    }

    return (
        <nav className="nav-bar">
            <div className="container">
                <img className="logo" src={Logo} />
                <h2 className="navbar--title">Chat-Room</h2>
            </div>

            {!user ?
                <button className="sign-in" onClick={googleSignIn}>SignIn</button> :
                <button className="sign-out" onClick={signOut}>SignOut</button>}
        </nav>
    )
}
export default NavBar;
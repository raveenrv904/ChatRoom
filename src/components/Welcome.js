import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Main from "../img/main.gif";



const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);

    }
    return (
        <div className="welcome-page">
            <div className="div">
                <h2 className="welcome__title">Welcome to <span className="chat">ChatRoom</span></h2>
                {/* <p classname="welcome__title">SignIn with google account to enter into ChatRoom</p> */}
                <button className="sign-in welcome__btn" onClick={googleSignIn}>SignIn</button>
            </div>
            <div>
                <img className="welcome__img" src={Main} />
            </div>

        </div>
    )
};

export default Welcome;
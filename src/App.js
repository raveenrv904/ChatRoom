import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import React from "react";

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
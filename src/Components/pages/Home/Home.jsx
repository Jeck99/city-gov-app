import { useState } from "react";
import "./Home.css";

function Home() {
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const onChangePassword = (eve) => {
    setPassword(eve.target.value);
  };
  const checkPassword = () => {
    if (password === "12345") {
      return (window.location.pathname = "http://localhost:3000/info");
    }
    setText("wrong password")
  };
  return (
    <div className="main home">
      <input type="text" onChange={onChangePassword} />
      <button onClick={checkPassword()}>click</button>
      <h1 style={{color:"red"}}>{text}</h1>
    </div>
  );
}

export default Home;

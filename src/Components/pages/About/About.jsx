import "./About.css";
import React, { useContext, useEffect } from "react";

function About() {

  // useEffect(() => {
  //   alert(`About Page Welcome: ${user.userName}`);
  // }, [user]);

  // const changeUser = (event) => {
  //   user[event.target.name] = event.target.value;
  // };
  // const saveUser = () => {
  //   setUser({ ...user });
  // };
  return (
    <div className="main about">
      <h1>About</h1>
      <div>
        {/* <label htmlFor="userName">user Name:</label>
        <input name="userName" type="text" onChange={changeUser} />
        <label htmlFor="userEmail">user Email:</label>
        <input name="userEmail" type="text" onChange={changeUser} />
        <label htmlFor="userAge">user Age:</label>
        <input name="userAge" type="number" onChange={changeUser} />
        <button onClick={saveUser}>SAVE</button> */}
      </div>
    </div>
  );
}

export default About;

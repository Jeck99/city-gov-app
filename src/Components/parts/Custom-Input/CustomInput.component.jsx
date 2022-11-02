import React from "react";

export default function CustomInput({type,name,value,placeholder,required,...rest}) {
  return (
    <div className="">
        <img src="logo192.png" alt="" />
        <img src="images/giphy.gif" alt="" />
      <label htmlFor=""></label>
      <TextField value={value} id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}

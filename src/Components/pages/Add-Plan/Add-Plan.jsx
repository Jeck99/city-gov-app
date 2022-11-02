import "./Add-Plan.css";
import { useState } from "react";

function AddPlan(props) {
  const [id, setId] = useState(0);
  const [compony, setCompony] = useState("");
  const [numberOfCustomers, setNumberOfCustomers] = useState(0);
  const [flag, setFlag] = useState(false);
  const [flights, setFlights] = useState(props.flightList);

  const onChangeId = (eve) => {
    let value =eve.target.value
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].id === value) {
        return;
      }
      setId(value)
     setFlag(true)
    }
  };
  const onChangeCompony = (eve) => {
    setCompony(eve.target.value);
  };
  const onChangeNumberOfCustomers = (eve) => {
    setNumberOfCustomers(eve.target.value);
  };
  const addFlight = () => {
    if(flag){
      setFlights(...flights,{id,compony,numberOfCustomers})
      return (window.location.pathname = "http://localhost:3000/allflight");


    }alert('ERROR')
  };
  return (
    <div className="main home">
      <input type="number" onChange={onChangeId} max={5} />
      <h1>{flag}</h1>
      <input type="text" onChange={onChangeCompony} minLength={1} />
      <input
        type="number"
        onChange={onChangeNumberOfCustomers}
        min={1}
        max={450}
      />

      <button onClick={addFlight}>Add Plan</button>
    </div>
  );
}

export default AddPlan;

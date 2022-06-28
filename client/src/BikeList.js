import { useState, useEffect } from "react";
import BikeCard from "./BikeCard";

function BikeList() {
    const [array,setArray] = useState([1,2]);
    

  return (
    <div className="BikeList">
      {array.map(e=>{return(<BikeCard />)})}
    </div>
  );
}

export default BikeList;
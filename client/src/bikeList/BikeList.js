import {  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
// import bikesSlice, { createBike,deleteBike,updateBike } from '../reduxComponents/bikes/bikesSlice'
import BikeCard from "./BikeCard";

function BikeList() {

  const pageUrl = new URL('https://api.99spokes.com/v1/bikes');
// pageUrl.searchParams.set('makerId','santacruz');
pageUrl.searchParams.set('category', 'mountain');
pageUrl.searchParams.set('year', 2022);
pageUrl.searchParams.set('limit', 20);
pageUrl.searchParams.set('include', '*');
pageUrl.searchParams.set('q', 'specialized');
// pageUrl.searchParams.set('isEbike', 'false');


  const bikes = useSelector((state) => state.bikes.value)
  const dispatch = useDispatch()
    // useEffect(() => {
    //   fetch(pageUrl,{
    //     headers: {'Authorization': 'Basic ' + btoa('flatironbikes:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6ImZsYXRpcm9uYmlrZXMiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE2NTY0NTk4NzR9.uVwVgUh8coMQGdygtV8wF_F0BGB_TXMavF8QR3mFMIQ')},
    //     include: 'images'
    //   })
    //   .then((r) => {
    //     if (r.ok) {
    //       r.json().then(data => 
    //         // console.log(data.items))
    //         dispatch(updateBike(data.items)))
            
    //         // {data.items.forEach(bike=>{
    //         //   fetch("/bikes", {
    //         //     method: "POST",
    //         //     headers: {
    //         //       "Content-Type": "application/json",
    //         //     },
    //         //     body: JSON.stringify(bike),
    //         //   }).then((r) => {
    //         //     // setIsLoading(false);
    //         //     if (r.ok) {
    //         //       r.json().then(data => console.log(data));
    //         //     } else {
    //         //       r.json().then(data => console.log(data));
    //         //     }
    //         //   });;
    //         // })
    //         //   dispatch(updateBike(data.items))
    //         // })
    //     }else {
    //       r.json().then(data => console.log(data));
    //     }
    //   });
    // }, []);
    // useEffect(() => {
    //   fetch('/bikes')
    //   .then((r) => {
    //     if (r.ok) {
    //       r.json().then(data => 
    //         // console.log(data))
    //         dispatch(updateBike(data)))
            
    //         // {data.items.forEach(bike=>{
    //         //   fetch("/bikes", {
    //         //     method: "POST",
    //         //     headers: {
    //         //       "Content-Type": "application/json",
    //         //     },
    //         //     body: JSON.stringify(bike),
    //         //   }).then((r) => {
    //         //     // setIsLoading(false);
    //         //     if (r.ok) {
    //         //       r.json().then(data => console.log(data));
    //         //     } else {
    //         //       r.json().then(data => console.log(data));
    //         //     }
    //         //   });;
    //         // })
    //         //   dispatch(updateBike(data.items))
    //         // })
    //     }else {
    //       r.json().then(data => console.log(data));
    //     }
    //   });
    // }, []);
    // console.log(bikes)

    // fetch("/bikes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(bike),
    // }).then((r) => {
    //   // setIsLoading(false);
    //   if (r.ok) {
    //     r.json().then(data => console.log(data));
    //   } else {
    //     r.json().then(data => console.log(data));
    //   }
    // });;

  return (
    
    <div className="BikeList">
      {bikes.map((e,index)=>{return(<BikeCard index={index} key={index}/>)})}
    </div>
  );
}

export default BikeList;
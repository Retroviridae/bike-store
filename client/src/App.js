import { useState, useEffect } from "react";
import { Route, Routes,useNavigate,useParams } from "react-router"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector, useDispatch } from 'react-redux'
import { update } from './reduxComponents/me/meSlice'
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import BikeList from "./bikeList/BikeList";
import Checkout from "./checkout/Checkout";
import Profile from "./Profile";
import Cart from "./Cart";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const me = useSelector((state) => state.me.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => dispatch(update({id:user.id,username:user.username})));
      }else {
        dispatch(update({}))
      }
    });
  }, []);
  
  
  // if (user) return (
  // <logout />
  // < Other components for logged in users />
  // return (
    // <Logged out components />)
  // 

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    {/* <div className="App"> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myCart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bikeList" element={<BikeList />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
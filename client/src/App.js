import { useState, useEffect } from "react";
import { Route, Routes,useNavigate,useParams } from "react-router"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./Home";
import Count from "./Count";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import BikeList from "./BikeList";
import Checkout from "./Checkout";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
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
        <Route path="/count" element={<Count count={count} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bikes" element={<BikeList />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
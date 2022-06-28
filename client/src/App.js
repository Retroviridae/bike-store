import { useState, useEffect } from "react";
import { Route, Routes,useNavigate,useParams } from "react-router"
import Home from "./Home";
import Count from "./Count";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count count={count} />} />
      </Routes>
      {/* <h1>Page Count: {count}</h1> */}
    </div>
  );
}

export default App;
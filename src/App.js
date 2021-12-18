import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

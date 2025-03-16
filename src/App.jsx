
import { Route, Routes }  from"react-router"
import Home from "./pages/Home";
import Rootlayouts from "./layouts/Rootlayouts";
import MarketPlace from "./pages/MarketPlace";

const App = () => {
  return (
    <Routes>
      <Route element={<Rootlayouts />}>
       <Route path="/" element={<Home />} />
       <Route path="/marketplace" element={<MarketPlace />} />
      </Route>
      
    </Routes>
  );
}; 

export default App;

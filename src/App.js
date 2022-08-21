import { Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './Pages/Shared/Navbar'
import Home from './Pages/Home/Home'
import Services from "./Services";
function App() {
  return (
    <div >
      <Navbar></Navbar>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/services" element={<Services />} />
</Routes>
    </div>
  );
}

export default App;

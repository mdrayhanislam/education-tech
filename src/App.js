import { Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './Pages/Shared/Navbar'
import Home from './Pages/Home/Home'
import Services from "./Pages/Home/Services";
import Footer from "./Pages/Shared/Footer";
import SpecialServices from "./Pages/Home/SpecialServices";
function App() {
  return (
    <div >
      <Navbar></Navbar>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/specialservices" element={<SpecialServices />} />
</Routes>
{/* <Footer></Footer> */}
    </div>
  );
}

export default App;

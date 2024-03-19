import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/home";
import Academy from "./component/academy";
import Blog from "./component/blog";
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';



function App() {
  return (
   
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/academy" element={<Academy />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/Contact" element={< Contact/>} />
         <Route path="/About" element={<About />} />
         <Route path="/Service" element={<Service />} />
         
        <Route path="*" element={<Navigate to="/" />} />
       </Routes>
     </Router>
  );
}

export default App;

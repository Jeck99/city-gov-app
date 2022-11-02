import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Info from "./Components/pages/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/parts/Navbar";
import Footer from "./Components/parts/Footer/Footer";
import Header from "./Components/parts/Header/Header";
import Movies from "./Components/pages/Movies/Movies.component.jsx";
const AppRouter=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/info" element={<Info />}/>
            <Route exact path="/movies" element={<Movies />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    )
} 
export default  AppRouter;
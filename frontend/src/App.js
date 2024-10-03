import React,{useEffect} from "react";
import Home from "./components/Home/home";
import "./App.css"
import Navbar from "./components/Navbar/navbar";
import Quiz from "./components/Quiz/quiz";
import About from "./pages/About/about";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Book from "./components/Book/book";
import Footer from "./components/Footer/footer";
import { useDarkMode } from './Darkmode';
const App=()=> {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <div className="App">
<Router>
<Navbar/>

   <Routes>
             
      <Route path="/" element={ <Home/>}  />
     <Route path="/quiz"  element={ <Quiz/>}  />
     <Route path="/about"  element={ <About/>}  />
     <Route path="/books"  element={<Book/>}  />
     <Route path="/contact"  element={<Contact/>}  />
     </Routes>
     
     <Footer/>
     </Router>
    </div>

  );
}

export default App;

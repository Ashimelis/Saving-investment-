import React from 'react';
import phot_logo from'./asset/photo_logo.jpg'
import './Router.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './component/Home/Home'
import Membership from './component/Membership/Membership'
import About from './component/About/About'
import Products from './component/Products/Products'
import Contact from './component/Contact/Contact'
import Login from './component/Auth/Login'
import Register from './component/Auth/Register';
import Training from './component/Training/Training'
import Saving from './component/Saving/Saving.js'
import Credit from './component/Credit/Credit'
import Projects from './component/Projects/Projects'
import Investment from './component/Investment/Investment'
import Faq from './component/Faq/Faq.js'
import Dashboard from './component/Dashboard/Dashboard'
function App() {
  return (
    <div> 
        <Router>
            <nav>
              <h2 id="ani">Welcome to Saving and investment Group Network , Community First!!!</h2>
              
            <ul className='nav-container'>
            <div className='logo-image'>
            
              <img src={phot_logo} alt='logo' width={150} height={45} /> 
            </div>
                
                <li className="nav"><Link to="/login">Login</Link></li>
                <li className="nav"><Link to="/register">Register</Link></li>
                <li className='nav'><Link to="/">Home</Link></li>
                <li className='nav'><Link to="/membership">Membership</Link></li>
                <li className="nav"><Link to="/dashboard">Dashboard</Link></li>
                <li className="nav"><Link to="/projects">Projects</Link></li>
                <li className="nav"><Link to="/product">Product</Link></li>
                <li className="nav"><Link to="/investment">Investment</Link></li>
                <li className="nav"><Link to="/saving">Saving</Link></li>
                <li className="nav"><Link to="/credit">Credit</Link></li>
                <li className="nav"><Link to="/training">Training</Link></li>
                <li className="nav"><Link to="/about">About</Link></li>
                <li className="nav"><Link to="/contact">Contact</Link></li>
                <li className="nav"><Link to="/faq">Faq</Link></li>
                
                </ul>

            </nav>
            
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/membership" element={<Membership/>}/>

                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/product" element={<Products/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/investment" element={<Investment/>}/>
                    <Route path="/saving" element={<Saving/>}/>
                    <Route path="/credit" element={<Credit/>}/>
                    <Route path="/training" element={<Training/>}/>
                    <Route path="/faq" element={<Faq/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            
        </Router>
        <footer>
          <div>
            <h1> This is footer</h1>
          </div>
        </footer>
    </div>
      
      
  );
}

export default App;
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import React from 'react';
import GoToTopButton from './Components/Body/Patents/Years/GoToTopButton';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <Footer></Footer>
        </BrowserRouter>
        <GoToTopButton></GoToTopButton>
    </div>
  );
}
export default App;

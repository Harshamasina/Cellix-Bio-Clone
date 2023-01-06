import { Navbar, Nav } from 'react-bootstrap';
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PT from "./PT";
import IP from "./IP";
import Pipeline from "./Pipeline";
import Contact from "./Contact";
import Logo from "./Logo";
import Patents from "../Body/Patents/Patents";
import PatentsDashboard from '../Body/Patents/Years/PatentsDashboard';
import Error404 from '../Body/Error404';
import PatentInfo from '../Body/Patents/Years/PatentInfo';
import Leadership from './Leadership';
import './Navbar.css';
import Inventor from './Inventor';
import { useState } from 'react';
import Media from './Media';
import Careers from './Careers';
import Login from '../Body/PipelineWorkFlow/Login';
import Register from '../Body/PipelineWorkFlow/Register';
import Profile from '../Body/PipelineWorkFlow/Profile';

function NavBar() {
        const [changeNavbar, setChangeNavbar] = useState(false);
        const changeBackground = () => {
            if(window.scrollY >= 80){
                setChangeNavbar(true);
            } else {
                setChangeNavbar(false);
            }
        }
        window.addEventListener('scroll', changeBackground);
        return (
            <>
                <div>
                
                    <Navbar collapseOnSelect  variant={"dark"} expand="lg" className={changeNavbar ? 'color-nav-scroll' : 'color-nav'}>
                        <Logo></Logo>
                        <Navbar.Brand href="#">
                           
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className="ms-auto my-2 my-xxl-0 gap-2 me-3"
                                style={{ maxHeight: '100%',fontSize:'17px'}}
                                responsive-navbar-nav
                            >
                                <Nav.Link className='navbar_link' as={Link} to="/Home" eventKey="1">Home</Nav.Link>
                                {/* <Nav.Link className='navbar_link' as={Link} to="/About" eventKey="2">About</Nav.Link> */}
                                <Nav.Link className='navbar_link' as={Link} to="/PT" eventKey="3">Platform Technology</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/Pipeline" eventKey="6">Pipeline</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/Patents" eventKey="4">Patents</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/IP" eventKey="5">Intellectual Property</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/Inventor" eventKey="7">INVENTOR</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/Leadership" eventKey="8">Leadership</Nav.Link>
                                {/* <Nav.Link className='navbar_link' as={Link} to="/Media" eventKey="9">Media</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/Careers" eventKey="10">CAREERS</Nav.Link>
                                <Nav.Link className='navbar_link' as={Link} to="/Contact" eventKey="11">Contact</Nav.Link> */}
                                <Nav.Link className='navbar_link' as={Link} to="/Profile" eventKey="9">Profile</Nav.Link>
                                <Nav.Link className='navbar_button' as={Link} to="/Login" eventKey="10">Employee Login</Nav.Link>
                                {/* <Nav.Link className='navbar_button' as={Link} to="/Register" eventKey="10">Sign Up</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className='navspan'></div>
                </div>
                
                <div>
                    <Routes>
                        <Route path='/Home' element = {<Home></Home>}></Route>
                        <Route path='/Patents' element = {<Patents></Patents>}></Route>
                        <Route path='/PT' element = {<PT></PT>}></Route>
                        <Route path='/IP' element = {<IP></IP>}></Route>
                        <Route path='/Pipeline' element = {<Pipeline></Pipeline>}></Route>
                        <Route path='/Inventor' element = {<Inventor></Inventor>}></Route>
                        <Route path='/Leadership' element = {<Leadership></Leadership>}></Route>
                        <Route path='/Contact' element = {<Contact></Contact>}></Route>
                        <Route path='/Media' element={<Media></Media>}></Route>
                        <Route path='/Careers' element={<Careers></Careers>}></Route>
                        <Route path='/PatentsDashboard/:years' element = {<PatentsDashboard></PatentsDashboard>}></Route>
                        <Route path='/PatentInfo/:wno' element = {<PatentInfo></PatentInfo>}></Route>
                        <Route path='/Cellix_Bio' element={<Home></Home>}></Route>
                        <Route path='/Login' element={<Login></Login>}></Route>
                        <Route path='/Register' element={<Register></Register>}></Route>
                        <Route path='/Profile' element={<Profile></Profile>}></Route>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='*' element={<Error404/>}></Route>
                    </Routes>
                </div>
            </>
        );
    }
export default NavBar;

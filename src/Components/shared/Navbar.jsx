
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { logoutUser } from '../../redux/actions/authActions';
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logos.png";
import { getUserDetail } from '../../redux/actions/userActions';
import { useLocation } from 'react-router-dom';
import Rules from '../assets/img/rules.png'

const Navbar = () =>{

  const username = localStorage.getItem("userName");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  const pathname = location.pathname

  useEffect(() => {
   if(username){
    dispatch(getUserDetail(username)).then((res) => {
      if (res?.status === 200) {
        setName(res?.data?.name);
      } else {
      }
    });
   }
  }, [username]);
  
  const onLogoutClick = () => {
   dispatch(logoutUser())
  };
    return (
      <>
         <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
    <Link to={'/dashboard'} class="navbar-brand border-none">
          <img src={Logo} alt="logo" />
        </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        {name ? 
            <>
            <li class={`nav-item `}>
              <Link
                className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}
                to="/dashboard"
              >
                Team Members
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${pathname === '/your-portfolio' ? 'active' : ''}`}
                to="/your-portfolio"
              >
                Your Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${pathname === '/team-portfolio' ? 'active' : ''}`}
                to="/team-portfolio"
              >
                Team Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${pathname === '/transcation' ? 'active' : ''}`}
                to="/transcation"
              >
                Transcation
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className={`nav-link ${pathname === '/notifications' ? 'active' : ''}`}
                to="/notifications"
              >
                Notification
              </Link>
            </li>
            <li class="nav-item">
            <Link
              className="nav-link btn btn-register button-outline-none"
              onClick={() => onLogoutClick()}
            >
              Logout
            </Link>
          </li>
            </>
             : 
            <li class="nav-item">
              <Link
                className="nav-link btn btn-register button-outline-none"
                to="/login"
              >
                Login
              </Link>
            </li>
             } 
        </ul>
      </div>
    </div>
  </nav>
        {name ? 
        <>
        <NavLink to="/rules"><img className='rules-img img-fluid' src={Rules}/></NavLink>
        {/* <i className="fa fa-file-text rules-icon text-success" aria-hidden="true" ></i> */}
        </> 
        : null}
      </>
    );
  }


export default Navbar;

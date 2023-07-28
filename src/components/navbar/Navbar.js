import React from "react";
import { NavbarContainer } from "./navbar.styles";
import brandLogo from "../../assets/images/brand-logo.png";
import { NavLink } from "react-router-dom";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useDispatch, useSelector } from "react-redux";
import { updateAdminLogin } from "../../redux/adminSlice";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.admin);


  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(updateAdminLogin({ isLoggedIn: false }));
  };

  return (
    <NavbarContainer>
      <img src={brandLogo} alt="Annapurna Events" className="brand-logo" />
      <ul className="navbar-list">
        {
          isLoggedIn ? <>
            <li className="navbar-item"><NavLink to="/location"><MyLocationOutlinedIcon className="nav-icons" />Live Location</NavLink></li>
            <li className="navbar-item"><NavLink to="/play-quiz"><PlayCircleFilledWhiteOutlinedIcon className="nav-icons" />Play Quiz</NavLink></li>
            <li className="navbar-item"><NavLink to="/set-questions"><AddBoxOutlinedIcon className="nav-icons" />Add Questions</NavLink></li>
            <li className="navbar-item" onClick={handleLogout}><NavLink to="/login"><LockOpenOutlinedIcon className="nav-icons" />Logout</NavLink></li>
          </>
            : <li className="navbar-item"><NavLink to="/login"><LockOpenOutlinedIcon className="nav-icons" />Login</NavLink></li>
        }
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
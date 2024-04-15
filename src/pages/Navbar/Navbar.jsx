import { NavLink } from "react-router-dom";
import './Nav.css'
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 shadow-md rounded-md px-4">
            <Logo></Logo>
            <ul className="flex gap-8">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
                <li>
                    <NavLink to="/login">log in</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
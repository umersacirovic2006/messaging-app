import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <nav className="Header">
            <button onClick={handleBackClick}>Go back</button>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/groups">Groups</NavLink>
            </div>
        </nav>
    );
};

export default Header;

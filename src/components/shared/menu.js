import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
        </>
    )
}

export default Menu;
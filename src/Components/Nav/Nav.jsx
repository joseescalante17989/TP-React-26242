import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="nav-list">
            <ul>
                <li>
                    <Link to= {"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Carrito</Link>
                </li>
            </ul>

        </nav>
    );

};
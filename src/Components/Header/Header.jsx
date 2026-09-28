import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import logo from "../../assets/icono.png";
import "./Header.css";

export const Header = () =>{
    return (
        <header>
            <div className="logo-conteiner">
                <Link to={"/"}>
                    <img src={logo} alt="iconopizza"/>
                    <span>Pizzeria Escalante</span>
                </Link>
            </div>
            <Nav/>
        </header>
    );
};
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../logos/Logos-Hussel-Kay.png";

function header() {


    return (

        <header className="header">

            <div className="container">

                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="boton">
                    <label for="btn-menu">Menu</label>
                </div>

                <input type="checkbox" id="btn-menu"></input>

                <nav className="menu">
                    <Link to="/" className="rutasNav">
                        Home
                    </Link>

                    <Link to="/services" className="rutasNav">
                        Services
                    </Link>

                    <Link to="/contact" className="rutasNav">
                        Contact
                    </Link>

                    <Link to="/team" className="rutasNav">
                        Team
                    </Link>
                </nav>

            </div>

        </header>

    );

};


export default header;
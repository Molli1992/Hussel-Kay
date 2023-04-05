import React from "react";
import "./header.css";



function header() {


    return (

        <header className="header">

            <div className="container">

                <div className="logo">
                    <h1>Hussel Kay</h1>
                </div>

                <div className="boton">
                    <label for="btn-menu">Menu</label>
                </div>

                <input type="checkbox" id="btn-menu"></input>

                <nav className="menu">
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Blog</a>
                    <a href="#">Contacto</a>
                </nav>

            </div>

        </header>

    );

};


export default header;
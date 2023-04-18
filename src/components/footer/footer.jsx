import React from "react";
import "./footer.css";



function footer() {


    return (

        <footer className="footer">

            <div className="footer-container">

                <nav className="footer-menu">
                    <a href="https://www.facebook.com/"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
                    <a href="https://twitter.com/?lang=es"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
                    <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                </nav>

            </div>

        </footer>

    );

};


export default footer;
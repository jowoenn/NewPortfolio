import React from "react";
import './Main.css';
import Introduction from "./Introduction.js";
import About from "./About.js";
import Contacts from "./Contacts.js";

export default function Header(){
    return (
        <div className="containerSection">
            <section className="introductionPage">
                <Introduction />
            </section>

            <section className="aboutPage">
                <About />
            </section>

            {/* To be continued at a later date ... :3 */}

            {/* <section className="projectsPage">
                <h1>Projects page</h1>
            </section> */}
            
            <section className="contactPage">
                <Contacts />
            </section>
            
        </div>
    );
}
import React from "react";
import './Contacts.css';

export default function Contacts(){
    return (
        <div className="containerSectionContact">
            <div className="whiteDecor"></div>

            <div className="containerForm d-flex flex-row">
                <div className="d-flex flex-row">
                    <ul className="list">
                        <li className="title">SAY HELLO</li>
                        <li>jonathan.woen@binus.ac.id</li>
                        <li>+62812-xxxx-xxxx</li>
                    </ul>
                    <ul className="list">
                        <li className="titleLazy">lazy</li>
                        <li><a href="https://instagram.com/jowoen">IG</a></li>
                        <li><a href="https://twitter.com/jowoennn">TW</a></li>
                        <li><a href="https://linkedin.com/in/jonathan-woen-4892821b8">LN</a></li>
                    </ul>
                </div>
            </div>
            
            {/* Decoration Line */}
            <hr className="lineDecor"></hr>

            <div className="copyRight">© Jonathan Woen 2023</div>
        </div>
    );
}
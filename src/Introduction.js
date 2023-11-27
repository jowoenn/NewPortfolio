import React from "react";
import './Introduction.css';
import jowoen from './Assets/jowoen.jpg'

export default function Introduction(){
    return (
        <div className="containerSection">
            <div className="wallpaperRight"></div>
            <div className="potretDiri"><img src={jowoen}></img></div>
            
            <div className="containerTitle d-flex flex-column">
               <div className="nameTitle">Frontend Developer.</div>
                <div className="descriptionTitle">I am a mobile based programmer and developer. Currently on an internship at PT Adicipta Inovasi Teknologi</div>
            
                <div className="containerDescription d-flex flex-row">
                    <div className="descriptionChild me-5">Skilled at UI/UX, Web and Mobile Development</div>
                    {/* <div className="descriptionChild">Logical and structural thinking, proficient at Functional and Object-Oriented Programming</div> */}
                    <div className="descriptionChild">Agar silahturami tidak terputus, bolehkah mendapat nilai seratus?</div>
                </div>
            </div>
        </div>
    );
}
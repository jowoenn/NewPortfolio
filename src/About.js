import React from "react";
import './About.css';

export default function About(){
    return (
        <div className="containerSectionAbout">
            <div className="d-flex flex-row">
                <div className="containerKiri d-flex flex-column col-6">
                    Design  
                    <div className="descriptionOne">Not your typical programmer, proficient in applications that support design such as Adobe Illustrator, Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects, and Figma. Very nitpicky about my design choices and will spend hours on it X-X. Will keep up with the trends in making my design. </div>
                </div>
                <div className="containerKanan d-flex flex-column col-6">
                    About Me
                    <div className="descriptionTwo">Welcome, my name is Jonathan Woen and I want to share you my story. I am a mobile application student from Bina Nusantara University. I am very passionate in learning mobile-based application and UI/UX design. Outside of coding, I also enjoy playing games, sports and playing/listeng music.</div>
                    Programming
                    <div className="descriptionOne">Have experiences in C and C++. For building web-based application I use React, for mobile-based I can use React Native, Android Studio (using Java)for android applications and have been studying Swift for iOS.</div>
                </div>
            </div>
        </div>
    );
}
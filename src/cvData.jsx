
import {Name, Email, Phone, Adress, Birth} from "./input";
import { Education } from "./education";
import { Profesional } from "./profesional";
import { Skills } from "./skills";
import { ProfilePicture } from "./profilePicture";
import './App.css'



function CvData()
{
    return(
        <>
        <div id = "profilePictureInfo">
            <ProfilePicture />
        </div>
        <div id = "personalInfo">
            <h3>Personal Information</h3>
            <Name />
            <Email />
            <Phone />
            <Adress />
            <Birth />
        </div>
        <div id = "education">
            <Education />
        </div>
        <div id = "profesional">
            <Profesional />
        </div>
        <div id = "skills">
            <Skills />
        </div>
        </>
    )
}

export default CvData;
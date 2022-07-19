import react from "react"
import LRGimg from "../images/ReactLogoLRG.png"

export default function Main(){
    return(
        <div className="main-container">
            {/* <img src={LRGimg} alt="large react icon" className="lrg-icon" /> */}
            <h1 className="title">Fun facts about React</h1>
            <ul className="list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
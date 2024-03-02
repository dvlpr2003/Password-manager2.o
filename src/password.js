import { useEffect, useRef } from "react";
import "./password.css";
export default function PasswordBody(){
    return(
        <div id="Password-main">
            <PasswordEntry/>
            <PasswordView/>
        </div>
        
    )
}

function PasswordEntry(){
    const InputElement = useRef(null)
    useEffect(function(){
        InputElement.current.focus()
    })
    return(
        <div className="password-container">
            <div id="inform-element">
            <label for="web-name">Website name</label>
            <input placeholder="Example: Google,Microsoft,Facebook" id="web-name" ref={InputElement}/>
            <label for="username">Username</label>
            <input placeholder="" id="username" />
            <GeneratePassword/>
            <div id="btn-1">
                <button>Clear All</button>
                <button>Confirm</button>
            </div>
            </div>
        </div>
    )
}
function GeneratePassword(){
    return (
        <div id="gen-pass">
            <div>
            <label for="password">Password</label>
            <input id="password"/>
            </div>
            <div>
                <button>Generate</button>
            </div>

        </div>
    )
}


function PasswordView(){
    return(
        <div className="password-container">
        </div>
    )
}
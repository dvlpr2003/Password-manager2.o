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
    return(
        <div className="password-container">
            <div id="inform-element">
            <label for="web-name">Website name</label>
            <input placeholder="Example: Google,Microsoft,Facebook" id="web-name"/>
            <label for="username">Username</label>
            <input placeholder="" id="username"/>
            <GeneratePassword/>

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
export default function PasswordBody(){
    return(
        <div id="">
            <PasswordEntry/>
            <PasswordView/>
        </div>
        
    )
}

function PasswordEntry(){
    return(
        <div className="password-container">
        <h1>Main</h1>
        </div>
    )
}

function PasswordView(){
    return(
        <div className="password-container">
        <h1>Gain</h1>
        </div>
    )
}
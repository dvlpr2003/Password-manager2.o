import { useEffect, useRef,useState } from "react";
import "./password.css";


export default function PasswordBody(){

    const [Cletters, setCLetters] = useState([]);
    const [Sletters,setSletters]=useState([])
    const [Num,setNum]=useState([])
    const [SPLchar,setSPLchar]=useState([])



    const [Capsltr,setCapsltr] = useState([])


    useEffect(function(){

        const Caps = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
        const smallLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
        const number = Array.from({length:11},(_,i)=>i);
        const specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

        setCLetters(Caps)
        setNum(number)
        setSletters(smallLetters)
        setSPLchar(specialCharacters)

    },[])
    useEffect(function(){
        if((Cletters.length >0 ) &&(Num.length>0) &&(Sletters.length>0) && (SPLchar.length>0))  {

            const rand_caps1 = Math.floor(Math.random()*Cletters.length)
            const rand_caps2 = Math.floor(Math.random()*Cletters.length)
            const rand_caps3 = Math.floor(Math.random()*Cletters.length)

            const rand_sMALL1 = Math.floor(Math.random()*Sletters.length)
            const rand_sMALL2 = Math.floor(Math.random()*Sletters.length)

            const rand_num1 = Math.floor(Math.random()*Num.length)
            const rand_num2 = Math.floor(Math.random()*Num.length)

            const rand_special1 = Math.floor(Math.random()*SPLchar.length)
            const rand_special2 = Math.floor(Math.random()*SPLchar.length)



            setCapsltr(
                [
                Cletters[rand_caps1],
                Cletters[rand_caps2],
                Cletters[rand_caps3],
                Sletters[rand_sMALL1],
                Sletters[rand_sMALL2],
                Num[rand_num1],
                Num[rand_num2],
                SPLchar[rand_special1],
                SPLchar[rand_special2]
                ]
                )

        }

    },[Cletters])

    useEffect(function(){
        const gen_password = Capsltr.join("")
        console.log(gen_password)

    },[Capsltr])
  
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
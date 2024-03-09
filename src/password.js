import { useEffect, useRef,useState } from "react";
import ViewBox  from "./view";
import "./password.css";


export default function PasswordBody(){
    const [Web,setWeb]=useState("")
    const [User,setUser]=useState("")

    const [ViewPage,setViewPage]=useState(false)
    const [True,setTrue] = useState(true)
    


    const [Cletters, setCLetters] = useState([]);
    const [Sletters,setSletters]=useState([])
    const [Num,setNum]=useState([])
    const [SPLchar,setSPLchar]=useState([])



    const [Capsltr,setCapsltr] = useState([])
    const [pass,setpass]=useState("")

    // passwordview Data 
    const [Final,setFinal]  = useState([])
    console.log(Final)


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
    function Onmount(){
        setCapsltr([])
        setpass("")

        if((Cletters.length >0 ) &&(Num.length>0) &&(Sletters.length>0) && (SPLchar.length>0))  {

            const rand_caps1 = Math.floor(Math.random()*Cletters.length)
            const rand_caps2 = Math.floor(Math.random()*Cletters.length)
            const rand_caps3 = Math.floor(Math.random()*Cletters.length)
            const rand_caps4 = Math.floor(Math.random()*Cletters.length)

            const rand_sMALL1 = Math.floor(Math.random()*Sletters.length)
            const rand_sMALL2 = Math.floor(Math.random()*Sletters.length)
            const rand_sMALL3 = Math.floor(Math.random()*Sletters.length)

            const rand_num1 = Math.floor(Math.random()*Num.length)
            const rand_num2 = Math.floor(Math.random()*Num.length)
            const rand_num3 = Math.floor(Math.random()*Num.length)

            const rand_special1 = Math.floor(Math.random()*SPLchar.length)
            const rand_special2 = Math.floor(Math.random()*SPLchar.length)
            const rand_special3 = Math.floor(Math.random()*SPLchar.length)
            const rand_special4 = Math.floor(Math.random()*SPLchar.length)



            setCapsltr(
                [
                Cletters[rand_caps1],
                Cletters[rand_caps2],
                Cletters[rand_caps3],
                Cletters[rand_caps4],
                Sletters[rand_sMALL1],
                Sletters[rand_sMALL2],
                Sletters[rand_sMALL3],

                Num[rand_num1],
                Num[rand_num2],
                Num[rand_num3],
                SPLchar[rand_special1],
                SPLchar[rand_special2],
                SPLchar[rand_special3],
                SPLchar[rand_special4],
                ]
                )

        }

    }
    useEffect(function(){
        const shuffledArray = Capsltr.sort(() => Math.random() - 0.5);
        console.log(shuffledArray)
        Capsltr.map((e)=>setpass((n)=>n+e))
    },[Capsltr])


    function All_clear_Anand(){
        setWeb("")
        setUser("")
        setpass("")
    }
  
    return(
        <div id="Password-main">
            <PasswordEntry l = {pass} Onmount={Onmount} setpass={setpass} Web={Web} User={User} setWeb={setWeb} setUser={setUser} All_clear_Anand={All_clear_Anand} setFinal={setFinal}/>
            <PasswordView ViewPage={ViewPage} setViewPage={setViewPage} Final={Final} True = {True} setTrue={setTrue}/>
            <ViewBox ViewPage={ViewPage} setViewPage={setViewPage} True = {True} setTrue={setTrue} Final={Final} />
        </div>
        
    )
}

function PasswordEntry({l,Onmount,setpass,Web,User,setWeb,setUser,All_clear_Anand,setFinal}){
    const InputElement = useRef(null)
    useEffect(function(){
        InputElement.current.focus()
    },[])
    let mapData = {
        website_name : Web,
        User_name : User,
        password : l

    }
    function Onconfirm(){
        if((mapData.website_name !== "") && (mapData.User_name !== "")) {
        setFinal((e)=>[...e,mapData])

        }


    }
    return(

        <div className="password-container">
            <div id="inform-element">
            <label for="web-name">Website name</label>
            <input placeholder="Example: Google,Microsoft,Facebook" id="web-name" ref={InputElement} value={Web} onChange={(e)=>setWeb(e.target.value)}/>
            <label for="username">Username</label>
            <input placeholder="" id="username" value={User} onChange={(e)=>setUser(e.target.value)}/>
            <GeneratePassword l={l} Onmount={Onmount} setpass={setpass}/>
            <div id="btn-1">
                <button onClick={All_clear_Anand}>Clear All</button>
                <button onClick={Onconfirm} >Confirm</button>
            </div>
            </div>
        </div>

    )
}
function GeneratePassword({l,Onmount}){
    return (
        <div id="gen-pass">
            <div>
            <label for="password">Password</label>
            <input id="password" defaultValue={l} />
            </div>
            <div>
                <button onClick={Onmount}>Generate</button>
            </div>

        </div>
    )
}
function PasswordView({ViewPage,setViewPage,Final,True,setTrue}){
    return(
        <div className="password-container">
            <div id="zderf" >
                <PasswordViewEle1 ViewPage={ViewPage} setViewPage={setViewPage} Final={Final} True = {True} setTrue={setTrue}/>
            </div>

        </div>
    )
}
function PasswordViewEle1({ViewPage,setViewPage,Final,True,setTrue}){
    return(
        <div id="gmdlwxc">
            {
            Final && Final.map((e,i)=><PasswordViewElements 
                ViewPage={ViewPage} 
                setViewPage={setViewPage} 
                web={e.website_name} 
                user = {e.User_name} 
                password={e.password} 
                index = {i+1}
                True={True}
                setTrue={setTrue}
                />)
            }
        </div>
    )
}
function PasswordViewElements({ViewPage,setViewPage,web,index,True,setTrue}){
    let joe = ViewPage  === index
    function ClicEvent(){
        setViewPage(index)
        setTrue((e)=>!e)
    }
    return(
        <div id="bdlfjldkj">
            <span>{index}</span> 
            <span>{web}</span>
            <button onClick={ClicEvent}>{joe?"Close":"View"}</button>
        </div>
    )
}
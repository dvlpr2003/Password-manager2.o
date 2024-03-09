export default function ViewBox({True,setTrue,ViewPage,setViewPage,Final}){
    function CancelBtn(){
        setTrue((e)=>!e)
        setViewPage()
    }
    return (
        <div id="view-box" style={True?{display:"none"}:{display:"block"} }>
            <div id="view-box-2">
            <button id="x-btn" onClick={CancelBtn}>&#9747;</button>
            {
                Final.map((e)=><BtnElements web = {e.website_name} user={e.User_name} password ={e.password}/>)
            }
            

            </div>
        </div>
    )
}
function BtnElements({web,user,password}){
    return(
        <>
                <span>Website Name : {web}</span>
                <span>User Name : {user}</span>
                <span>Password : {password}</span>
        </>
    )
}

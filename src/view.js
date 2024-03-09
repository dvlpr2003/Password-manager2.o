export default function ViewBox({True,setTrue,ViewPage,setViewPage,Final}){
    function CancelBtn(){
        setTrue((e)=>!e)
        setViewPage()
    }
    console.log(Final.at(ViewPage-1))
    return (
        <div id="view-box" style={True?{display:"none"}:{display:"block"} }>
            <div id="view-box-2">
            <button id="x-btn" onClick={CancelBtn}>&#9747;</button>
            <span>Website Name : {Final.at(ViewPage-1)["website_name"]}</span>
                <span>User Name : {Final.at(ViewPage-1)["User_name"]}</span>
                <span>Password : {Final.at(ViewPage-1)["password"]} </span>

            </div>
        </div>
    )
}

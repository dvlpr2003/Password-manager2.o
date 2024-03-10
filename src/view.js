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
                Final.length >0 && <BoxEle Final={Final} ViewPage={ViewPage}/>
            }
            </div>
        </div>
    )
}
function BoxEle({Final,ViewPage}){
    return(
        <>
             <span>Website Name : {Final.at(ViewPage-1)["website_name"]}</span> 
            <span>User name : {Final.at(ViewPage-1)["User_name"]}</span> 
            <span>password: {Final.at(ViewPage-1)["password"]}</span> 
               
        </>
    )
}
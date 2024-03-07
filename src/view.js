export default function ViewBox({True,setTrue,ViewPage,setViewPage}){
    function CancelBtn(){
        setTrue((e)=>!e)
        setViewPage()
    }
    return (
        <div id="view-box" style={True?{display:"none"}:{display:"block"} }>
            <div id="view-box-2">
            <button id="x-btn" onClick={CancelBtn}>&#9747;</button>
                <span>Website Name : Google</span>
                <span>User Name : dvlpr_2003</span>
                <span>Password : jlkdjlfjdf44</span>
            </div>
        </div>
    )
}
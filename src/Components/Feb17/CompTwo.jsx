import { useState } from "react"


const CompTwo = () => {

    const [service, setService] = useState("")


  return (
    <div>

        {
            service == "mtn" ? <h1>MTN Clicked</h1> : 
            service == "airtel" ? <h1>Airtel Clicked</h1> : 
            null
        }


        <button onClick={()=> setService("mtn")}>MTN</button>
        <button onClick={()=> setService("airtel")}>Airtel</button>

        <img 
        src="https://imgs.search.brave.com/yCDg0vLuYzqW_E1LqN1b1fuBrrw4ih8sgHzcgyBPVPo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzkvMS9tdG4tbG9n/by1wbmdfc2Vla2xv/Z28tOTU3MTYucG5n" 
        alt="" 
        style={{width: "100px", height: "100px"}}
        onClick={()=> setService("mtn")}
        />

        <img 
        src="https://imgs.search.brave.com/sShnqCBiDx8UPLK8DPmYZ8Enkwg924WDXsHf8WzE7ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QzL2Qz/LzlmL2QzZDM5ZjYy/NDc5NTBiNDRlZGY2/NGQxMjc1MDBmOTUy/LmpwZw" 
        alt="" 
        style={{width: "100px", height: "100px"}}
        onClick={()=> setService("airtel")}
        />


    </div>
  )
}

export default CompTwo
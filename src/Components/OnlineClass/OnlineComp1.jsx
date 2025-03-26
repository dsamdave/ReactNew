import { use } from "express/lib/application";
import { useEffect, useState } from "react";



const OnlineComp1 = () => {

    const [loading, setLoading] = useState(false)

    const [topic, setTopic ] = useState("")



    const fetchData = async ()=>{
        const data = await fetch("https://jsontypicode.com/api/users")
    }

useEffect( ()=>{

    setTopic("Introduction")

    // fetchData()

}, [  ] )

  return (
    <div>
        <h1>{topic}</h1>
      <h1>Welcome to Online Class</h1>
    </div>
  );
};

export default OnlineComp1;

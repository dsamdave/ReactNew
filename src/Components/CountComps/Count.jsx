import { useState } from "react"



const CountComp = () => {

    const [ count, setCount  ] = useState(0)


    const increaseCount = ()=>{
        setCount(count + 1)
        
    }

    const decreaseCount = ()=>{
        if(count === 0){
            return setCount(0)
        }
        
        setCount(count - 1)
    }
 



  return (
    <div className="roww">

        <button className="bbtn" 
        onClick={decreaseCount}>
            -
        </button>

        <h3>{count}</h3>

        <button className="bbtn" onClick={increaseCount}>
            +
        </button>
        
    </div>
  )
}

export default CountComp
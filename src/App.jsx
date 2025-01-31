import LeftComp from "./Components/Assignment/LeftComp"
import RightComp from "./Components/Assignment/rightComp"
import "./App.css"
import CountComp from "./Components/CountComps/Count"




const App =()=>{
  return (

    <>
    <div className="container">
      <LeftComp />

      <RightComp />

    </div>

    <CountComp />
    </>


  )

}

export default App
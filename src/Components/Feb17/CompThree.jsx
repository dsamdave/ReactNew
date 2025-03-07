import { useState } from "react";
import UserForm from "./UserForm";

const CompThree = () => {
  const dummyData = [
    {
      name: "David",
      email: "david@example.com",
      score: 100,
    },
    {
      name: "David",
      email: "david@example.com",
      score: 100,
    },
    {
      name: "David",
      email: "david@example.com",
      score: 100,
    },
    {
      name: "David",
      email: "david@example.com",
      score: 100,
    },
   
  ];

  const [data, setData] = useState(dummyData);
  const [showForm, setShowForm] = useState(false)
const [ name, setName ] = useState("")  
const [ email, setEmail ] = useState("")  
const [ score, setScore ] = useState("")  


const handleSubmit = (e)=>{
 e.preventDefault()

 if(!name || !email || !score){
  return alert("Please all fields are required")
 }

//  if(!name){
//   return alert("Please enter name")
//  }
//  if(!email){
//   return alert("Please enter email")
//  }
//  if(!score){
//   return alert("Please enter score")
//  }

  const item = {
    name: name,
    email: email,
    score: score
  }

  console.log(item)

  setData([...data, item])

  setName("")
  setEmail("")
  setScore("")

}



  return (
    <div>
      {data.length > 0 && (
        <table>

          <thead>
            <th>S/n</th>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
          </thead>

          {data.map((each, idx) => (
            <tbody key={idx}>
              <tr>
                <td>{idx + 1}</td>
                <td>{each?.name}</td>
                <td>{each?.email}</td>
                <td>{each?.score}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}



      <button 
      className="btn"
      style={{marginTop: "70px"}}
      onClick={()=> setShowForm(!showForm)}
      >

        {showForm ? "Hide Form" : "Show Form"}

      </button>

      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{score}</h2>



      {
        showForm && 
        <UserForm 
        name={name}
        setName={setName}
        email={email} setEmail={setEmail}
        score={score} setScore={setScore}
        handleSubmit={handleSubmit}
        />
      }
      {/* {
        showForm ? <UserForm /> : null
      } */}

      
    </div>
  );
};

export default CompThree;

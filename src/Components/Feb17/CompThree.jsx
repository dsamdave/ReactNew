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
   
  ];

  const [data, setData] = useState(dummyData);
  const [showForm, setShowForm] = useState(false)

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

      {
        showForm && <UserForm />
      }
      {/* {
        showForm ? <UserForm /> : null
      } */}

      
    </div>
  );
};

export default CompThree;

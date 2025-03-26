import { useEffect } from "react";
import "./App.css";
import CompOne from "./Components/March 26/CompOne";
// import CompThree from "./Components/Feb17/CompThree";
// import CompOne from "./Components/Feb17/CompOne";
// import CompTwo from "./Components/Feb17/CompTwo";
// import Card from "./Components/ProfileComps/Card";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignUp from "./pages/SignUp";
import AppointmentPage from "./pages/Appointments";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  // const users = [
  //   {
  //     firstName: "David",
  //     lastName: "Sampson",
  //     email: "exaple@gmail.com",
  //     phone: 12345678790,
  //   },
  //   {
  //     firstName: "George",
  //     lastName: "White",
  //     email: "White@gmail.com",
  //     phone: 12345678790,
  //   },
  //   {
  //     firstName: "Joy",
  //     lastName: "Solomon",
  //     email: "joy@gmail.com",
  //     phone: 12345678790,
  //   },
  // ];


useEffect(()=>{
  toast.success("Welcome")
  toast.error("Please login!")
  toast.info("Please login!")
  toast.loading("Please login!")
  toast.warn("Please login!")
}, [])

  return (
    <>

    <CompOne />

    {/* <AppointmentPage /> */}

    {/* <CompTwo /> */}

    {/* <CompThree />

    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignUp />} />

    </Routes> */}




      {/* {users.map((each, idx) => (
        <Card princess={each} />
      ))} */}
      {/* {users.map((each, index) => (
        <div className="card" key={index}>
          <div
            className="image"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          >
            <img src="/logoll.png" alt="" style={{ width: "100%" }} />
          </div>

          <div className="contents">
            <h1>First Name: {each?.firstName}</h1>
            <h1>Last Name: {each?.lastName}</h1>

            <h3>Email: {each?.email}</h3>
            <h3>Phone Number: {each?.phone}</h3>
          </div>
        </div>
      ))} */}


<ToastContainer />
    </>
  );
};

export default App;

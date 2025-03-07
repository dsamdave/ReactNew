import { useState } from "react"
import { AppointmentFormComp } from "../Components/Forms/AppointmentFormComp"
import { LoginForm } from "../Components/Forms/LoginFormComp"
import { SignUpForm } from "../Components/Forms/SignUpFormComp"


const AppointmentPage = ()=>{

    const appointmentData = [
        {
            id: 1,
            patientName: "Princess McDonald",
            doctorName: "Dr. Maxwell",
            date: "12-05-2025",
            time: "8:00AM",
            status: "Pending"

        },
        {
            id: 2,
            patientName: "David Sampson",
            doctorName: "Dr. Egbuonu",
            date: "25-03-2025",
            time: "10:00AM",
            status: "Completed"

        },
        {
            id: 3,
            patientName: "Favour Great",
            doctorName: "Dr. George",
            date: "31-03-2025",
            time: "12:00PM",
            status: "Cancelled"

        }
    ]

    const [formToShow, setFormToShow] = useState(null)

    const [fullName, setFullName] = useState("")
    const [doctorName, setDoctorName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const [initialData, setInitialData] = useState(appointmentData)

    const handleFormToShow = (formType) =>{

        setFormToShow(formType)

    }

    const handleAppointmentForm = (e)=>{
        e.preventDefault()

        console.log({fullName, doctorName, date, time})

        if(!fullName || !doctorName || !date || !time){
            return alert("Please fill out all fields!")
        }

        const newAppointment = {
            id: initialData.length + 1,
            patientName: fullName,
            doctorName: doctorName,
            date: date,
            time: time,
            status: "Pending"

        }

        setInitialData([...initialData, newAppointment])
        
        setFullName("")
        setDoctorName("")
        setDate("")
        setTime("")
    }


    return (
        <div>
        <h1>Appointment Page</h1>

        <table className="appointment-table">
            <thead>  
                <tr>
                    <th>id</th>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    initialData.map((each, idx) => (
                        <tr key={idx}>
                            <td>{each.id}</td>
                            <td>{each.patientName}</td>
                            <td>{each.doctorName}</td>
                            <td>{each.date}</td>
                            <td>{each.time}</td>
                            <td>{each.status}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>

        <div className="btn-container">
            <button className="btn1" 
            onClick={()=> handleFormToShow("appointment")}>
                Book Appointment
            </button>

            <button className="btn2" onClick={()=> handleFormToShow("login")}>
                Login
            </button>

            <button className="btn3" onClick={()=> handleFormToShow("signup")}>
                Sign Up
            </button>
        </div>

        {
            formToShow == "appointment" ? 
            <AppointmentFormComp
                fullName={fullName} 
                setFullName={setFullName}
                doctorName={doctorName}
                setDoctorName={setDoctorName}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}

                handleAppointmentForm={handleAppointmentForm}

            /> :

            formToShow == "login" ? <LoginForm /> : 

            formToShow == "signup" ? <SignUpForm /> :
            null
        }



        </div>
    )
}

export default AppointmentPage
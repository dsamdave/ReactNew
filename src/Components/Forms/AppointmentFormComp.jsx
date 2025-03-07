



export const AppointmentFormComp = (prop) => {
    
  return (
    <div className="container">

      <div className="form-container">
        <h2>Book Appointment</h2>
  
         <form onSubmit={prop.handleAppointmentForm} >
          <input type="text" placeholder="Full Name"
          value={prop.fullName}
          onChange={(e)=> prop.setFullName(e.target.value)}
          />
          <input type="date" 
          value={prop.date}
          onChange={(e)=> prop.setDate(e.target.value)}
          />

          <input type="time" 
          value={prop.time}
          onChange={(e)=> prop.setTime(e.target.value)}
          />
  
          <select 
            value={prop.doctorName}
            onChange={(e)=> prop.setDoctorName(e.target.value)}
          >
            <option value="">Select A Doctor</option>
            <option value="Dr. Edison">Dr. Edison</option>
            <option value="Dr. Gideon">Dr. Gideon</option>
            <option value="Dr. Sampson">Dr. Sampson</option>
          </select>
  
          <button className="btn-app" type="submit">Book Now</button>
  
         </form>
      </div>
    </div>
  )
}

 AppointmentFormComp
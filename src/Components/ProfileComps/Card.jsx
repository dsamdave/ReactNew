import "./card.css"

const Card = (prop) => {


  return (
    <div className="card">
        <div className="image"
        style={{width: "100px", height: "100px", borderRadius: "50%", }}
        >
            <img src="/logoll.png" alt="" 
            style={{width: "100%"}}
             />
        </div>

        <div className="contents">
            <h1>First Name: {prop?.princess?.firstName}</h1>
            <h1>Last Name: {prop?.princess?.lastName}</h1>

            <h3>Email: {prop?.princess?.email}</h3>
            <h3>Phone Number: {prop?.princess?.phone}</h3>
        </div>
    </div>
  )
}

export default Card
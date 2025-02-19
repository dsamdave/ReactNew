

import "./userform.css"

const UserForm = (prop) => {
  return (
    <div>
        
        <form onSubmit={prop.handleSubmit}>
            <div className="input-container">
                <label htmlFor="name">Enter name</label>
                <input type="text" placeholder="Enter name"
                value={prop.nameee}
                onChange={(e)=> prop.setNameeee(e.target.value) }
                />
            </div>

            <div className="input-container">
                <label htmlFor="email">Enter email</label>
                <input type="text" placeholder="Enter Email"
                value={prop.email}
                onChange={(e)=> prop.setEmail(e.target.value) } 
                />
            </div>

            <div className="input-container">
                <label htmlFor="number">Enter  score</label>
                <input type="text" placeholder="Enter score"
                value={prop.score}
                onChange={(e)=> prop.setScore(e.target.value)} 
                />
            </div>

            <button
            type="submit"
            className="btn"
            >Submit</button>
        </form>
    </div>
  )
}

export default UserForm
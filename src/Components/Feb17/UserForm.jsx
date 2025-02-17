

import "./userform.css"

const UserForm = () => {
  return (
    <div>
        
        <form>
            <div className="input-container">
                <label htmlFor="name">Enter name</label>
                <input type="text" placeholder="Enter name" />
            </div>

            <div className="input-container">
                <label htmlFor="email">Enter email</label>
                <input type="text" placeholder="Enter Email" />
            </div>

            <div className="input-container">
                <label htmlFor="number">Enter  score</label>
                <input type="text" placeholder="Enter score" />
            </div>

            <button
            className="btn"
            >Submit</button>
        </form>
    </div>
  )
}

export default UserForm
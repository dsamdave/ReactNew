
import { useEffect, useState } from "react"



const CompOne = ()=>{

    const token = "gydctyghfghfvyufhvgh"

const [name, setName] = useState("Hello")
const [amt, setAmt] = useState("")
const [id, setId] = useState(0)
const [todos, setTodos] = useState([])
const [selectedTodo, setSelectedTodo] = useState(null)



const fetchData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(result => setTodos(result))
}


  useEffect( ()=>{
    fetchData()
    setId(1)
  }, [])  

  useEffect(()=>{
    if(!token){
        alert("please login!")
    }

  }, [])

  useEffect(()=>{
    if(!id || todos.length == 0) return

    const result = todos.filter((each)=> {
        return each.id === id
    })

    if(!result || result.length == 0) return

    console.log({result})
    setSelectedTodo(result[0])


  }, [id, todos]) 

  console.log({selectedTodo})

    return (
        <div>

        <h6 className="text-3xl font-bold underline">Congratulations</h6>



        <h1>{name}</h1>

        <input type="numbver" placeholder="Amount"
        value={amt}
        onChange={(e)=> setAmt(e.target.value)}
        />

<h1>Selected Data</h1>
        {
            selectedTodo && (
                <div>
                    <h1>{selectedTodo?.id }</h1>
                    <h3>{selectedTodo?.title}</h3>
                </div>
            )
        }


<h1>Mapped Data</h1>
        {
            todos.length > 0 && todos.map((each, idx)=>(
                <div key={idx}>
                    <h1>{each?.id}</h1>
                    <h3>{each?.title}</h3>
                </div>
            ))
        }

        </div>
    )
}

export default CompOne
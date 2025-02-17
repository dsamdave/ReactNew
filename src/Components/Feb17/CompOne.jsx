import SSL from "./SSL"
import TTS from "./TTS"


const CompOne = ()=> {

    const score = 31



    return (
        <div>

            <h1>Welcome To ReactJs</h1>

            <h1>{ score > 30 ? "David" : "Sampson"}</h1>

            <h2>{score < 10 ? score + 1 : score - 1}</h2>

            { score > 12 ? (<h1>Test</h1>) : (<h2>Exam</h2>)}


            {
                score < 15 ? (<TTS />) : (<SSL />)
            }
        </div>
    )
}

export default CompOne
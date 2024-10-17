import { useState } from "react"


function Count() {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const Newcount = count + 1
        setCount(Newcount)

    }

    const handleReduce = () => {
        const newCount = count - 1
        setCount(newCount)
    }

    return (
        <div className='text-center font-bold mt-10 border-2 border-red-700 p-5'>

            <h3>Counter: {count}  </h3>
            <button onClick={handleAdd} className="btn btn-primary text-white mt-2">Increse Value</button>
            <button onClick={handleReduce} className="btn btn-primary text-white mt-2">Reduce Value</button>


           


        </div>
    )
}

export default Count

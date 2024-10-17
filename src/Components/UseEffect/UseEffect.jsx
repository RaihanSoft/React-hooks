import { useEffect, useState } from "react"
import Friend from "../Friend/Friend";



const UseEffect = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])


    return (
        <div className="text-center font-bold border-green-500 border-2 mt-10 p-5">

            <h3>Users : {posts.length} </h3>

            {
                posts.map(item=> <Friend friend={item} ></Friend> )

            }

        </div>
    )
}

export default UseEffect

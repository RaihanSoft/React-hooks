const Friend = ({friend}) => {
    const {name , email} = friend
  return (
    <div className="mt-5 border-2 border-red-300">

        <h4>Name : {name} </h4>
        <p className="mt-2">Email : {email} </p>
      
    </div>
  )
}

export default Friend

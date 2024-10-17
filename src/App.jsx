
import './App.css'
import Count from './Components/Count/Count'
import CountRecape from './Components/CountRecape/Count-recape'
import UseEffect from './Components/UseEffect/UseEffect'

function App() {

  const handleClick=(props)=>{
    alert(props)

  }


  return (
    <>


      <div className='text-center font-bold'>
        <h1>This Is React</h1>
        <button onClick={() => {handleClick("ok")}} className='btn'>Click Me </button>
        <button onClick={() => handleClick("SomeThing Wrong")} className='btn'>Click Me Two </button>
      </div>

    <Count></Count>
    <CountRecape></CountRecape>
    <UseEffect></UseEffect>
    </>
  )
}

export default App

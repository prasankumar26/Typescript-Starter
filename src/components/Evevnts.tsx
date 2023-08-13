import {useState} from 'react'

interface Istate{
count: number,
}

interface Iprops {

}

const Evevnts:React.FC = () => {
    const [state, setState] = useState<Istate>({count: 0})

    // add increment 
    const handleIncrement = () =>{
        setState({count: state.count + 1})
    }

    // decrement 
    const handleDecreament = () =>{
        if(state.count > 0){
            setState({count: state.count - 1})
        }
    }

  return (
    <div>
        <h2>Event Handling</h2>
        <h1>{state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecreament}>Decrement</button>
    </div>
  )
}

export default Evevnts
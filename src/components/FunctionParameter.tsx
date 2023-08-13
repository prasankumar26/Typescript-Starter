import {useState} from 'react'

interface Istate {
    message: string
}

const FunctionParameter:React.FC = () => {

    const [state, setState] = useState<Istate>({message: 'Welcome'})

    const handleMessage = (like:string) =>{
    //    setState({message: state.message = like})
       setState({message: like})
    }

  return (
    <div>
        <h2>{state.message}</h2>
        <button onClick={()=> handleMessage('Like')}>Like</button>
        <button onClick={()=> handleMessage('Comment')}>Comment</button>
        <button onClick={()=> handleMessage('Subscribe')}>Subscribe</button>
    </div>
  )
}

export default FunctionParameter
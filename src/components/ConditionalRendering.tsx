import {useState} from 'react'

interface Istate {
    isLogin: boolean,
}

const ConditionalRendering:React.FC = () => {

    const [state, setState] = useState<Istate>({
        isLogin: true,
    })

    const loginUser = (): void =>{
       setState({isLogin: false})
    }

    const logoutUser = (): void =>{
        setState({isLogin: true})
    }

  return (
    <div className="container my-5">
        {state.isLogin && state.isLogin ? <h3>Please Login Dashboard</h3> : <h3>Welcome User</h3> }

       {state.isLogin ? <button onClick={loginUser}>Login</button> : 
       <button onClick={logoutUser}>Logout</button>}

        
    </div>
  )
}

export default ConditionalRendering
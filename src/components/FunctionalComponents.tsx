import {useState} from 'react'

interface IState{
    name: string,
    title: string,
}

interface IPROPS {
    name: string,
    title: string,
    age?: number,
}

const FunctionalComponents:React.FC<IPROPS> = ({name, title, age}) => {
    const [state, setState] = useState<IState>({
        name: 'prasan', 
        title: "Frontend Developer"
    })
  return (
    <div>
        <h3>{name}</h3>
        <h3>{title}</h3>
        <h3>{age}</h3>

        <h2>Values form State</h2>
        <h4>{state.name}</h4>
        <h4>{state.title}</h4>
    </div>
  )
}

export default FunctionalComponents
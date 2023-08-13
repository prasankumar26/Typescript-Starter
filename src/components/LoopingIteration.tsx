import {useState} from 'react'
import {IUser} from '../models/IUser' 
import { UserService } from '../services/UserService'

interface IState {
    users: IUser[]
}

const LoopingIteration:React.FC = () => {

  const [state, setState] = useState<IState>({
    users: UserService.getAllUsers()
  })

  return (
    <div className="container my-5">
        <h2 className="mb-4">Looping Iteration</h2>

        <table className="table">
        <thead>
            <tr>
            <th scope="col">SNo</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            {state.users.length > 0 && state.users.map((user) =>{
            return (
              <>
            <tr key={user.sno}>
              <td>{user.sno}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
              </>
            )
          })}
           
        </tbody>
        </table>

    </div>
  )
}

export default LoopingIteration
import {useState} from 'react'
import {Ilogin} from './../models/ILogin' 

interface Istate {
    user: Ilogin
}

const initialFormState: Istate = {
    user: {
      email: '',
      password: '',
    },
  };
  
const FormHandling:React.FC = () => {

    const [state, setState] = useState<Istate>(initialFormState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void =>{
       const {name, value} = event.target;
      setState({
        user:{
            ...state.user,
            [name]: value
        }
      })
    }

    const handleSubmit = 
    (event: React.FormEvent<HTMLElement>): void =>{
      event.preventDefault()
      console.log(state.user, "SUbmit");
      // Reset the form fields after submission
      setState(initialFormState);
    }

  return (
   <div className="container my-5">
     <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input 
        value={state.user.email}
        name="email"
        onChange={handleChange}
        type="email" 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="nameHelp" 
        />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
        value={state.user.password}
        name="password"
        onChange={handleChange}
        type="password" 
        className="form-control" 
        id="exampleInputPassword1" 
        />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <div className="row mt-5">
       <h2>Input Data</h2>
       <p>
        {JSON.stringify(state.user)}
       </p>
    </div>
   </div>
  )
}

export default FormHandling
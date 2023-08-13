import { useState, useEffect } from "react"
import { IFetchUsers } from "../models/FetchUserData"
import { FetchUserService } from "../services/FetchUserService"

interface IState {
    loading: boolean,
    users: IFetchUsers[],
    errorMsg: string,
}

const FetchData: React.FC = () => {

    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IFetchUsers[],
        errorMsg: ''
    })

    console.log(state.users, "state");



    // fetchData 
    const fetchData = async () => {
        setState({ ...state, loading: true })
        try {
            const response = await FetchUserService.getAllUsers()
            setState({
                ...state, loading: false, users: response.data
            })
        } catch (error) {            
            setState({ ...state, loading: false, errorMsg: (error as Error).message });
        }
    }


    // network request 
    useEffect(() => {
        fetchData()
    }, [])


    const { loading, users, errorMsg } = state;

    if(loading){
        return <h2>Loading...</h2>
    }


    return (
        <>
            <div className="container">
            <h1>Data From APIS</h1>
             {errorMsg && <p>{errorMsg}</p>}
               {users.length > 0 && users.map((item) =>{
             return (
                <div className="d-flex align-items-center">
                  <h2 className="me-2">{item.id}.</h2>
                  <h6>{item.name}</h6>
                </div>
             )
               })}
            </div>
        </>
    )
}

export default FetchData
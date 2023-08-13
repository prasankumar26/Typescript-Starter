import axios from 'axios'

export class FetchUserService {
private static URL:string = 'https://jsonplaceholder.typicode.com'

public static getAllUsers(){
    let userURL = `${this.URL}/users`
    return axios.get(userURL)
}
}


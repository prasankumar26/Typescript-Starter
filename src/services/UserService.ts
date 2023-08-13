import {IUser} from '../models/IUser'

export class UserService{
    private static users:IUser[] =  [
        {sno: 1, name: 'prasan', age:23},
        {sno: 2, name: 'rahul', age:28},
        {sno: 3, name: 'virat', age:25}
      ]

      public static getAllUsers(){
        return this.users
      }
}
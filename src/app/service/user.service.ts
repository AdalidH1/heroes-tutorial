import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
data :User[] =[{
  id: 1,
  name: "Alan",
  lastName: "Gonzales",
  age: 21,
  email: "alan@gmail.com",
  phone: 6181232323,
  password: "123123qasdadA"
},
{
  id: 2,
  name: "Mafe",
  lastName: "Santillan",
  age: 21,
  email: "alan@gmail.com",
  phone: 6181232323,
  password: "123123qasdadA"
},
{
  id: 3,
  name: "Mario",
  lastName: "Castañeda",
  age: 21,
  email: "alan@gmail.com",
  phone: 6181232323,
  password: "123123qasdadA"
}]
  constructor() { }

  getData(){
    return this.data;
  }
  addData(user:User){
    this.data.push(user)
  }
}

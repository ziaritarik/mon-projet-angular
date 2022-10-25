import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user/user.module';

//@Injectable({
 // providedIn: 'root'
//})
export class UserService {  
  userSubject=new Subject<User[]>();
  private users:User[]=[
    {
    firstName:'tarik',
    lastName:'ziari',
    email:'ziaritarik.u@gmail.com',
    drinkPrefance:'the',
    hobbies:[
      'coder',
      'le dégustation du cofe'
        ]
      }
    ];

  constructor() {

   }
   
  emiUser(){
    this.userSubject.next(this.users.slice());
  }
  addUser(user:User){
    this.users.push(user);
    this.emiUser();
  }
}

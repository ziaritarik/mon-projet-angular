import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:User[]=[];
  userSubject=new Subject<User[]>();
  constructor() { }
  emiUser(){
    this.userSubject.next(this.users.slice());
  }
  addUser(user:User){
    this.users.push(user);
    this.emiUser();
  }
}

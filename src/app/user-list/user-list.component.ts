import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user/user.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:User[];
  userSuscription:Subscription;
  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.userSuscription=this.userService.userSubject.subscribe(
      (users:User[])=>{
        this.users=users;
      }      
    );
    this.userService.emiUser();
  }


}

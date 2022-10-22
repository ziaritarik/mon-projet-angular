import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth=false; 

  constructor() {

   }

   siginIn(){
    return new Promise(
      (resolve,reject)=>{
        setTimeout(
          ()=>{
            this.isAuth=true;
            resolve(true);
          },2000)
      }
  )
   }

}

export class User { 
  /*Métode 1
  firstName:string;
  lastName:string;
  constructor(firstName:string,lastName:string){
    this.firstName=firstName;
    this.lastName=lastName;
  }*/
  //méthode plus facile
  constructor(public firstName:string,
              public lastName:string,
              public email:string,
              public drinkPrefance:string,
              public hobbies?:string[] ){

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }

  
  appareils=[
    {
      id:1,
      name:'Machine à laver',
      status:'éteint'
    },
    { id:2,
      name:'Télévision',
      status:'allumé'
    },
    {
      id:3,
      name:'Ordinateur',
      status:'allumé'
    },
    {
      id:4,
      name:'moninx',
      status:'allumé'
    },
    {
      id:5,
      name:'téléphone',
      status:'allumé'
    }

  ];
  getAppareilById(id:number){
    const appareil=this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id===id;
      }
    )
    return appareil;
  }
  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status='allumé';
    }
  }
  switchOfAll(){
    for(let appareil of this.appareils){
      appareil.status='éteint';
    }
  }
  switchOnOn(index:number){
    this.appareils[index].status='allumé';
  }
  switxhOfon(index:number){
    this.appareils[index].status='éteint';
  }
}

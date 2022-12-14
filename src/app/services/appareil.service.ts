import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//test de git pour récupérer dernier version
@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareilSubject =new Subject<any[]>();
  constructor(private httpClient:HttpClient) { }  
 private appareils=[
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
  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }
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
    this.emitAppareilSubject();
  }
  switchOfAll(){
    for(let appareil of this.appareils){
      appareil.status='éteint';
    }
    this.emitAppareilSubject();
  }
  switchOnOn(index:number){
    this.appareils[index].status='allumé';
    this.emitAppareilSubject();
  }
  switxhOfon(index:number){
    this.appareils[index].status='éteint';
    this.emitAppareilSubject();
  }
  addAppareil(name:string,status:string){
    const appareilObject={
      id:0,
      name:'',
      status:''
    };
    appareilObject.name=name;
    appareilObject.status=status;
    appareilObject.id=this.appareils[(this.appareils.length-1)].id+1;
    
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
  
}

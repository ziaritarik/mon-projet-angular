import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth=false; 
  lasteDate =new Date();
  appareils:any[];
  constructor(private appareilService:AppareilService){
    setTimeout(
      ()=>{this.isAuth=true;
      },4000);
  }
  ngOnInit(): void {
        this.appareils=this.appareilService.appareils;
  }

  lasteUpdate =new Promise(
    (resolve,reject)=>{
        const date=new Date();
        setTimeout(
          ()=>{
            resolve(date);
          },2000)
    }
  );


  
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  ofEteindre(){
    this.appareilService.switchOfAll();
  }


}

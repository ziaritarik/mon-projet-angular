import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth=false;
  lasteDate =new Date();
  lasteUpdate =new Promise(
    (resolve,reject)=>{
        const date=new Date();
        setTimeout(
          ()=>{
            resolve(date);
          },2000)
    }
  );
  appareils=[
    {
      name:'Machine à laver',
      status:'éteint'
    },
    {
      name:'Télévision',
      status:'allumé'
    },
    {
      name:'Ordinateur',
      status:'allumé'
    }

  ]

appareilOne="Machine à laver";
appareilTwo="Télévision";
appareilThree="Ordinateur";
  constructor(){
    setTimeout(
      ()=>{this.isAuth=true;
      },4000);
  }

  
  
  onAllumer(){
    //console.log("on allume tout");
  }

}

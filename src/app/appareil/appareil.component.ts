import { ApplicationInitStatus, Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
    //appareilName='Machine à laver';
    //appareilStatus='éteint'
    @Input() appareilName:string;
    @Input() appareilStatus:string;
    @Input() id:number;
    @Input() indexOfappareil:number;
  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }

  gitStatus():string{
    return this.appareilStatus;
  }
  getColor(){
  if(this.appareilStatus==='allumé'){
      return 'green';
  }else if(this.appareilStatus==='éteint'){
    return 'red';
  }
}
onswitchOn(){
  this.appareilService.switchOnOn(this.indexOfappareil);
}
onswitchOf(){
  this.appareilService.switxhOfon(this.indexOfappareil)
}
}

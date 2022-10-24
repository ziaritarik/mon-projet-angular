import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
    seconde:number;
    conterSubscribe:Subscription;
  constructor() { }

  ngOnDestroy(): void {
    this.conterSubscribe.unsubscribe();
  }

  ngOnInit(): void {
    const conter = interval(1000);
    this.conterSubscribe=conter.subscribe(
      (value:number)=>{
          this.seconde=value;
      }
    )
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule,Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoues : Routes=[
  {path : '',canActivate:[AuthGuardService],component:AppareilViewComponent},
  {path : 'auth',component:AuthComponent},
  {path : 'appareilView',canActivate:[AuthGuardService],component:AppareilViewComponent },
  {path : 'appareilView/:id',canActivate:[AuthGuardService],component:SingleAppareilComponent},
  {path : 'not-found',canActivate:[AuthGuardService],component:FourOhFourComponent},
  {path : '**',redirectTo:'/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoues),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

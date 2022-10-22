import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule,Routes } from '@angular/router';

const appRoues : Routes=[
  {path : '',component:AppareilViewComponent},
  {path : 'auth',component:AuthComponent},
  {path : 'appareilView',component:AppareilViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule,Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoues : Routes=[
  {path : '',canActivate:[AuthGuardService],component:AppareilViewComponent},
  {path : 'auth',component:AuthComponent},
  {path : 'appareilView',canActivate:[AuthGuardService],component:AppareilViewComponent },
  {path : 'appareilView/:id',canActivate:[AuthGuardService],component:SingleAppareilComponent},
  {path : 'edit' ,canActivate:[AuthGuardService],component:EditAppareilComponent},
  {path : 'users' ,canActivate:[AuthGuardService],component:UserListComponent},
  {path : 'newUser' ,canActivate:[AuthGuardService],component:NewUserComponent},
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
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoues),
  ],
  providers: [UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }

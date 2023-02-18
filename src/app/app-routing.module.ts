import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ArtformComponent } from './pages/artform/artform.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';


const routes: Routes = [
  {
    path:'',component: HomePageComponent
  },
  
  {
    path: 'contact',component: ContactPageComponent
  },
  {
    path: 'signin',component: SigninPageComponent
  },
  {
    path: 'artform',component: ArtformComponent
  },
  {
    path: 'signup',component: SignupPageComponent
  },
  {
    path: 'singlepage',component: SinglepageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

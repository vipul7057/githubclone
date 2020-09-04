import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreaterepoComponent } from './createrepo/createrepo.component';
import { FilepageComponent } from './filepage/filepage.component';
import { ShowfilesComponent } from './showfiles/showfiles.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './notfound/pagenotfound.component';
const routes: Routes = [
  {path:"1",component:LoginComponent},
    {path:"2",component:SignupComponent},
    {path:"forgotpassword",component:ForgotpasswordComponent},
    {path:"homepage",component:HomepageComponent},
    {path:"create",component:CreaterepoComponent},
    {path:"filepage",component:FilepageComponent},
    {path:"showfile",component:ShowfilesComponent},
    { path: '', component: SignupComponent },
    {path:'profile',component:ProfileComponent},
    {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

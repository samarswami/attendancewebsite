import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddInstComponent } from './add-inst/add-inst.component';
import { LogoutComponent } from './logout/logout.component';
import { AddbradminComponent } from './addbradmin/addbradmin.component';
import { AddLecturerComponent } from './add-lecturer/add-lecturer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addinst', component: AddInstComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addbradmin', component: AddbradminComponent },
  { path: 'addlecturer', component: AddLecturerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { EPresentyComponent } from "./e-presenty/e-presenty.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from "@angular/material";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { AuthguardsComponent } from "./authguards/authguards.component";
import { AppRoutingModule } from "./app-routing.module";
import { AddInstComponent } from "./add-inst/add-inst.component";
import { HttpClientModule } from "@angular/common/http";
import { LogoutComponent } from './logout/logout.component';
import { AddbradminComponent } from './addbradmin/addbradmin.component';
import {MatSelectModule} from '@angular/material/select'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddLecturerComponent } from './add-lecturer/add-lecturer.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { Auth0serviceService } from "./auth0service.service";
import { FlxUiDatatableModule,FlxUiDataTable } from 'flx-ui-datatable' ;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EPresentyComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    AuthguardsComponent,
    AddInstComponent,
    LogoutComponent,
    AddbradminComponent,
    AddLecturerComponent,
    AddStudentComponent,
    AddSubjectComponent,
    AddBatchComponent,
  ],
  imports: [
    AppRoutingModule,
    MatProgressBarModule,
    FlxUiDatatableModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},Auth0serviceService,FlxUiDataTable],
  bootstrap: [AppComponent]
})
export class AppModule {}

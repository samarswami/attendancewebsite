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
  MatMenuModule,
  MatSortModule
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
import { InstgridComponent } from './instgrid/instgrid.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {DataService} from './services/data.service'
import {AddDialogComponent} from './dialogs/add/add.dialog.component'
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component'
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import { BranchGridComponent } from './branch-grid/branch-grid.component';
import { AddBranchDialogComponent } from './dialogs/branch/add-branch-dialog/add-branch-dialog.component';
import { DeleteBranchDialogComponent } from './dialogs/branch/delete-branch-dialog/delete-branch-dialog.component';
import { EditBranchDialogComponent } from './dialogs/branch/edit-branch-dialog/edit-branch-dialog.component';

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
    InstgridComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    BranchGridComponent,
    AddBranchDialogComponent,
    DeleteBranchDialogComponent,
    EditBranchDialogComponent
  ],
  imports: [
    AppRoutingModule,
   
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
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
    MatSelectModule,
    MatSortModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},Auth0serviceService,DataService],
  bootstrap: [AppComponent],
  exports:[AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent],
    entryComponents:[AddDialogComponent,
      EditDialogComponent,
      DeleteDialogComponent]
})
export class AppModule {}

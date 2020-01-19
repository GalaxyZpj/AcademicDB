import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './school/student/student.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'student/:schoolcode/:standard/:admissionNo', component: StudentComponent },
  { path: 'school/:dist/:subDist/:schoolcode', component: SchoolComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

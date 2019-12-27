import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './school/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'student', component: StudentComponent },
  { path: 'school/:dist/:subDist/:school', component: SchoolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

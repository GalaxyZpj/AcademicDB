import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
// Government Portal Navigation Component
import { RecordsComponent } from './records/records.component';
// Dashboard Components
import { SchoolComponent } from './school/school.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Student Tree Components
import { ClassListComponent } from './school/class-list/class-list.component';
import { StudentListComponent } from './school/student-list/student-list.component';
import { StudentComponent } from './school/student/student.component';
import { StudentAttendanceComponent } from './school/student/student-attendance/student-attendance.component';
// Teacher Tree Components
import { TeacherDivisionListComponent } from './school/teacher-division-list/teacher-division-list.component';
import { TeacherListComponent } from './school/teacher-list/teacher-list.component';
import { TeacherComponent } from './school/teacher/teacher.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  // School Tiles
  { path: 'classList', component: ClassListComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: 'studentProfile', component: StudentComponent },
  { path: 'schoolProfile', component: SchoolComponent },
  // { path: 'studentAttendance', component: StudentAttendanceComponent },
  // { path: 'studentMarks', component: StudentMarksComponent },
  
  // Teacher Tiles
  { path: 'teacherDivisionList', component: TeacherDivisionListComponent },
  { path: 'teacherList', component: TeacherListComponent },
  { path: 'teacherProfile', component: TeacherComponent },
  
  // Miscelleneous
  { path: 'records', component: RecordsComponent },
  { path: 'student/:schoolcode/:standard/:admissionNo', component: StudentComponent},
  { path: 'attendance/:admissionNo', component: StudentAttendanceComponent },
  { path: 'school/:dist/:subDist/:schoolcode', component: SchoolComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

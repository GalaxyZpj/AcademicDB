import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './school/student/student.component';
import { TeacherComponent } from './school/teacher/teacher.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StudentAttendanceComponent } from './school/student-attendance/student-attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './school/student-list/student-list.component';
import { ClassListComponent } from './school/class-list/class-list.component';
import { TeacherDivisionListComponent } from './school/teacher-division-list/teacher-division-list.component';
import { TeacherListComponent } from './school/teacher-list/teacher-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcademicRecordsComponent } from './school/academic-records/academic-records.component';
import { TeacherAttendanceComponent } from './school/teacher-attendance/teacher-attendance.component';
import { ChooserComponent } from './school/chooser/chooser.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecordsComponent,
    SchoolComponent,
    StudentComponent,
    TeacherComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    StudentAttendanceComponent,
    DashboardComponent,
    StudentListComponent,
    ClassListComponent,
    TeacherDivisionListComponent,
    TeacherListComponent,
    AcademicRecordsComponent,
    TeacherAttendanceComponent,
    ChooserComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

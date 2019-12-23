import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { SubDistrictComponent } from './district/sub-district/sub-district.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './school/student/student.component';
import { TeacherComponent } from './school/teacher/teacher.component';
import { HeaderComponent } from './header/header.component';
import { SchoolDetailsComponent } from './school/school-details/school-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    SubDistrictComponent,
    SchoolComponent,
    StudentComponent,
    TeacherComponent,
    HeaderComponent,
    SchoolDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

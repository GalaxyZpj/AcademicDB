import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictComponent } from './district/district.component';
import { SubDistrictComponent } from './district/sub-district/sub-district.component';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailsComponent } from './school/school-details/school-details.component';


const routes: Routes = [
  { path: '', component: DistrictComponent, children: [
      { path: ':dist', component: SubDistrictComponent, children: [
        { path: ':subDist', component: SchoolComponent }
      ] }
    ] },
  { path: ':dist/:subDist/:school', component: SchoolDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

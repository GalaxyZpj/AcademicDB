import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataFetchService } from '../shared/data-fetch.service';
import { School } from './school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schoolDetailsLoaded = true;
  classLoaded = false;
  studentLoaded = false;

  private standardData: string[];
  private studentData: {admissionNo: string, name: string}[];

  district: string;
  subDistrict: string;
  school: string;
  schoolInfo: School;
  standard: string;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataFetchService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.district = params['dist'];
        this.subDistrict = params['subDist'];
        this.school = params['school'];
      }
    );
    this.schoolInfo = this.data.fetchSchoolDetails('temp123');
  }

  onStudentRecord() {
    console.log('Student Fetching...');
    this.standardData = this.data.fetchStandardList(this.schoolInfo.schoolcode);
    this.schoolDetailsLoaded = !this.schoolDetailsLoaded;
    this.classLoaded = !this.classLoaded;
  }

  onTeacherRecord() {
    console.log('Teacher Fetching...');
  }

  onSelectStandard(standard: string) {
    this.standard = standard;
    this.studentData = this.data.fetchStudentList(this.schoolInfo.schoolcode, standard);
    this.classLoaded = !this.classLoaded;
    this.studentLoaded = !this.studentLoaded;
  }

  onSelectStudent(admissionNo: string) {
    this.router.navigate(['student', this.schoolInfo.schoolcode, this.standard, admissionNo])
  }
}

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

  standardData: string[];
  studentData: {admissionNo: string, name: string}[];

  district: string;
  subDistrict: string;
  school: string;
  schoolcode: string;
  schoolInfo: School;
  standard: string;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataFetchService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.district = params['dist'];
        this.subDistrict = params['subDist'];
        this.schoolcode = params['schoolcode'];
      }
    );
    this.data.cloudantHttp([this.schoolcode, 'root:profile']).subscribe(
      (response: any) => {
        console.log(response);
          this.schoolInfo = new School( response.schoolcode, 
                                      response.name,
                                      response.address,
                                      response.subDistrict,
                                      response.board,
                                      response.principal,
                                      response.teacherCount );
      }
    );
  }

  onStudentRecord() {
    // this.standardData = this.data.fetchStandardList(this.schoolInfo.schoolcode);
    this.data.cloudantHttp([this.schoolcode, 'root:class_list']).subscribe(
      (request: any) => {
        this.standardData = request.class_list;
      }
    )
    this.schoolDetailsLoaded = !this.schoolDetailsLoaded;
    this.classLoaded = !this.classLoaded;
  }

  onSelectStandard(standard: string) {
    this.standard = standard;
    // this.studentData = this.data.fetchStudentList(this.schoolInfo.schoolcode, standard);
    this.data.cloudantHttp([this.schoolcode, 'root:students']).subscribe(
      (request: any) => {
        this.studentData = request[this.standard];
      }
    )


    this.classLoaded = !this.classLoaded;
    this.studentLoaded = !this.studentLoaded;
  }
  
  onSelectStudent(admissionNo: string) {
    this.router.navigate(['student', this.schoolInfo.schoolcode, this.standard, admissionNo])
  }

  onTeacherRecord() {
    console.log('Teacher Fetching...');
  }
}

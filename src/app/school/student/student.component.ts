import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Student } from './student.model';
import { DataFetchService } from 'src/app/shared/data-fetch.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  admissionNo: string;
  schoolcode: string;
  constructor(private route: ActivatedRoute, private data: DataFetchService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.admissionNo = params['admissionNo'];
      }
    );
    this.data.cloudantHttp([this.schoolcode, 'student:' + this.admissionNo]).subscribe(
      request => {
        this.student = new Student(
          this.admissionNo,
          request['name'],
          request['admission_no'],
          request['standard'],
          request['section'],
          request['gender'],
          request['dob'],
          request['father_name'],
          request['mother_name'],
          request['phone'],
          request['email'],
          request['address'],
          request['date_of_joining'],
          request['transport'],
          request['marks'])
      }
    )
  }

  onSelectMarksheet() {
    console.log('Fetching Marksheet...');
  }

  onSelectAttendance() {
    console.log('Fetching Attendance...');
    this.router.navigate(['attendance', this.admissionNo]);
  }
}

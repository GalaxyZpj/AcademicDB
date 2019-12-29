import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Student } from './student.model';
import { DataFetchService } from 'src/app/shared/data-fetch.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private student: Student;

  constructor(private route: ActivatedRoute, private data: DataFetchService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let schoolcode = params['schoolcode'];
        let standard = params['standard'];
        let admissionNo = params['admissionNo'];
        this.student = this.data.fetchStudent(schoolcode, admissionNo);
      }
    );
  }

  onSelectMarksheet() {
    console.log('Fetching Marksheet...');
  }

  onSelectAttendance() {
    console.log('Fetching Attendance...');
  }

}

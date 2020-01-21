import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from './teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  schoolcode: string;
  teachercode: string;
  teacher: Teacher;

  constructor(private data: DataFetchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.teachercode = params['teachercode'];
      }
    );
    this.data.cloudantHttp([this.schoolcode, 'teacher:'+this.teachercode]).subscribe(
      request => {
        this.teacher = new Teacher (
          this.teachercode,
          request['name'],
          request['dob'],
          request['gender'],
          request['address'],
          request['pincode'],
          request['email'],
          request['phone'],
          request['division'],
          request['dateOfJoining'],
          request['subjects']
        )
      }
    );
  }
}

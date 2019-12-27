import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataFetchService } from '../shared/data-fetch.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  district: string;
  subDistrict: string;
  school: string;
  schoolInfo: { schoolcode: string,
                name: string,
                address: string,
                subDistrict: string,
                board: string,
                principal: string,
                teacherCount: number }
  constructor(private route: ActivatedRoute, private data: DataFetchService) { }

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
  }
  onTeacherRecord() {
    console.log('Teacher Fetching...');
  }
}

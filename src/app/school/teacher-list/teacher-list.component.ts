import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  division: string;

  schoolcode: string;

  // teacherList: [
  //   {
  //     name: string,
  //     code: string
  //   }
  // ];
  teacherList: any;

  constructor(private data: DataFetchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.division = params['division'];
      }
    );
    this.data.cloudantHttp([this.schoolcode, 'teacherDivision:'+this.division]).subscribe(
      request => {
        this.teacherList = request['teachers'];
        console.log(this.teacherList);
      }
    );
  }

  onSelectTeacher(teacher) {
    
  }

}

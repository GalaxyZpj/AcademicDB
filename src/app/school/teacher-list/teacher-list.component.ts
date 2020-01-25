import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Router } from '@angular/router';
declare function fetchDBdoc2(schoolcode,abc):any;
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  division: string;

  schoolcode: string;

  teacherData: { name: string, code: string }[];
  // teacherData: any;

  constructor(private data: DataFetchService, private route: ActivatedRoute, private router: Router) { }
  operation: string;

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.division = params['listcode'];
        this.operation = params['operation'];
      }
    );
    // this.data.cloudantHttp([this.schoolcode, 'teacherDivision:'+this.division]).subscribe(
    //   request => {
    //     this.teacherData = request['teachers'];
    //   }
    // );
    fetchDBdoc2(this.schoolcode,"teacherDivision:"+this.division).then(
      result=>{
        console.log(result)
        this.teacherData=result["teachers"]
      }
    )
  }

  onSelectTeacher(teacher: string) {
    this.router.navigate([this.operation], { queryParams: { 'teachercode': teacher }, queryParamsHandling: 'merge' });
  }

}

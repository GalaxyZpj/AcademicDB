import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
declare function fetchDBdoc1(schoolcode,anc):any;
@Component({
  selector: 'app-teacher-division-list',
  templateUrl: './teacher-division-list.component.html',
  styleUrls: ['./teacher-division-list.component.css']
})
export class TeacherDivisionListComponent implements OnInit {
  schoolcode: string;
  teacherDivisions: string[];
  chooser: string;
  chooserURL: string;

  constructor(private router: Router, private data: DataFetchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.chooser = params['chooser'];
      }
    );
    // this.data.cloudantHttp([this.schoolcode, 'root:teacherDivision']).subscribe(
    //   request => {
    //     this.teacherDivisions = request['divisions'];
    //   }
    // );
    fetchDBdoc1(this.schoolcode,"root:teacherDivision").then(
      result=>{
        console.log(result)
        this.teacherDivisions=result["divisions"]
      }
    )
  }

  onSelectDivision(division: string) {

    if (this.chooser == 'chooser') {
      this.chooserURL = 'chooser';
    } else {
      this.chooserURL = 'teacherList';
    }

    // this.router.navigate(['teacherList'], { queryParams: { 'division': division }, queryParamsHandling: 'merge' });
    this.router.navigate([this.chooserURL], { queryParams: { 'elementType': 'teacherList', 'listcode': division }, queryParamsHandling: 'merge' });
  }
}

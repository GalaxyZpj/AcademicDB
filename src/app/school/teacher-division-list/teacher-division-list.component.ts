import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataFetchService } from 'src/app/shared/data-fetch.service';

@Component({
  selector: 'app-teacher-division-list',
  templateUrl: './teacher-division-list.component.html',
  styleUrls: ['./teacher-division-list.component.css']
})
export class TeacherDivisionListComponent implements OnInit {
  schoolcode: string;
  teacherDivisions: string[];
  constructor(private router: Router, private data: DataFetchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
      }
    );
    this.data.cloudantHttp([this.schoolcode, 'root:teacherDivision']).subscribe(
      request => {
        this.teacherDivisions = request['divisions'];
      }
    );
  }

  onSelectDivision(division: string) {
    this.router.navigate(['teacherList'], { queryParams: { 'division': division }, queryParamsHandling: 'merge' });
  }
  
}

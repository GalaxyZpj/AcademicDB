import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentData;
  schoolcode: string;
  standard: string;
  operation: string;
  constructor(private data: DataFetchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.standard = params['standard'];
        this.operation = params['operation'];
      }
    );
    // console.log(this.standard, this.schoolcode);
    this.data.cloudantHttp([this.schoolcode, 'studentList:'+this.standard]).subscribe(
      request => {
        this.studentData = request['students'];
      }
    );
  }

  onSelectStudent(admissionNo: string) {
    this.router.navigate([this.operation], { queryParams: { 'admissionNo': admissionNo }, queryParamsHandling: 'merge' });
  }

}

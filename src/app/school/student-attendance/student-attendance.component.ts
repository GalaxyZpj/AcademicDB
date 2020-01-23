import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Params } from '@angular/router';
import { format } from 'url';


@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {
  admissionNo: string;
  attendance: any[];
  dates: string[] = [];
  constructor(private data: DataFetchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.admissionNo = params['admissionNo']
        console.log(this.admissionNo);
        let d = new Date();
        console.log(d.toLocaleDateString('en-IN', { "formatMatcher": "year, month, day" }))
        // console.log(d.toISOString().slice(0,10));    
      }    
    );
    // this.data.cloudantHttp([])
    
    // for (var i = new Date(2020, 1, 1); i. <= 20; i.setDate(i.getDate()+1) ) {
    //     console.log(i)
    //     this.dates.push(new Date(i).toISOString().slice(0, 10));
    // }
    console.log(this.dates);
  }
}

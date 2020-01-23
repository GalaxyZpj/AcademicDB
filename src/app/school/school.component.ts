import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataFetchService } from '../shared/data-fetch.service';
import { School } from './school.model';

declare function setDistricts(): any;
  
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  schoolcode: string;
  school: School;
  standard: string;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataFetchService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
      }
    );
    this.data.cloudantHttp([this.schoolcode, 'root:profile']).subscribe(
      (response: any) => {
        // console.log(response);
        this.school = new School(response.schoolcode,
          response.name,
          response.address,
          response.subDistrict,
          response.board,
          response.principal,
          response.teacherCount);
      }
    );
  }
}

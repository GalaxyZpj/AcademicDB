import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Router } from '@angular/router';

declare function fetchDBdoc(schoolcode,arg2): any;

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  schoolcode: string;
  standardData: string[];
  chooser: string;
  chooserURL: string;
  
  constructor(private data: DataFetchService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
        this.chooser = params['chooser'];
      }
    )
    // this.data.cloudantHttp([this.schoolcode, 'root:class_list']).subscribe(
    //   request => {
    //     this.standardData = request['class_list'];
    //   }
    // );


    fetchDBdoc(this.schoolcode,"root:class_list").then(
      result => {
        console.log(result);
        this.standardData = result['class_list'];
      }
    );
  }

  onSelectStandard(standard: string) {
    
    if (this.chooser == 'chooser') {
      this.chooserURL = 'chooser';
    } else {
      this.chooserURL = 'studentList';
    }

    // this.router.navigate(['studentList'], { queryParams: { 'standard': standard }, queryParamsHandling: 'merge' });
    this.router.navigate([this.chooserURL], { queryParams: { 'elementType': 'studentList', 'listcode': standard }, queryParamsHandling: 'merge' });
  }
}

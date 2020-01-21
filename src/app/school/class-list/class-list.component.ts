import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  schoolcode: string;
  standardData: string[];

  constructor(private data: DataFetchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.schoolcode = params['schoolcode'];
      }
    )
    this.data.cloudantHttp([this.schoolcode, 'root:class_list']).subscribe(
      request => {
        this.standardData = request['class_list'];
      }
    );
  }

  onSelectStandard(standard: string) {
    this.router.navigate(['studentList'], { queryParams: { 'standard': standard }, queryParamsHandling: 'merge' });
  }
}

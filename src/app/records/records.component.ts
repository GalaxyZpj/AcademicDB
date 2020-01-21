import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFetchService } from '../shared/data-fetch.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  
  districtChoosed: boolean = false;
  subDistrictChoosed: boolean = false;

  districtSelected: string;
  subDistrictSelected: string;
  schoolSelected: any;

  district: string[];
  subDistrict: string[];
  schools: JSON[];

  constructor(private router: Router, private data: DataFetchService) { }

  ngOnInit() {
    // this.data.cloudantHttp(['district', 'districts']).subscribe(
    //   (response: any) => {
    //     this.district =  response.districts;
    //   }
    // );
    this.data.cloudantHttp(['sikkim', '_all_docs']).subscribe(
      response => {
        this.district = response['rows'];
      }
    )
  }

  onSelectDistrict(dist: string) {
    this.districtSelected = dist;
    this.data.cloudantHttp(['sikkim', dist]).subscribe(
      response => {
        this.subDistrict =  response['subdistricts'];
      }
    );
    this.districtChoosed = true;
  }

  onSelectSubDistrict(subDist: string) {
    this.subDistrictSelected = subDist;
    this.data.cloudantHttp(['schools', subDist]).subscribe(
      response => {
        this.schools =  response['schools'];
      }
    );
    this.subDistrictChoosed = true;
  }

  onSelectSchool(school: any) {
    this.schoolSelected = school.name;
    console.log(typeof(this.schoolSelected))
    let schoolcode = school.code;
    this.router.navigate(['/school', this.districtSelected, this.subDistrictSelected, schoolcode]);
  }
}

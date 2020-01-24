import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFetchService } from '../shared/data-fetch.service';

declare function sendDistricts(): any;
declare function sendSubDistrict(district): Promise<any>;


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

  district: any;
  subDistrict: any;
  schools: JSON[];


  constructor(private router: Router, private data: DataFetchService) { }

  ngOnInit() {
    // this.data.cloudantHttp(['sikkim', '_all_docs']).subscribe(
    //   response => {
    //     this.district = response['rows'];
    //   }
    // );
    // this.district = sendDistricts();

    sendDistricts().then(result => {
      this.district = result;
    })
  }

  onSelectDistrict(dist: string) {
    this.subDistrictChoosed = false;
    // console.log(this.d);
    this.districtSelected = dist;
    // this.data.cloudantHttp(['sikkim', dist]).subscribe(
    //   response => {
    //     this.subDistrict =  response['subdistricts'];
    //   }
    // );

    sendSubDistrict(dist).then(result => {
      
      let x = result;
 
      this.subDistrict = x;
      console.log(typeof(this.subDistrict));
    })
    
   

    // this.subDistrict = sendSubDistrict(dist);
    // console.log(this.subDistrict);

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

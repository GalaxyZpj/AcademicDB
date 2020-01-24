import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFetchService } from '../shared/data-fetch.service';

declare function sendDistricts(): any;
declare function subdistrict2(district): any;
declare function senddistrict(): any;

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
    senddistrict().then(result => {
  
      this.district = result;
    })

    console.log(this.district);
  }

  onSelectDistrict(dist: string) {
    // console.log(this.d);
    this.districtSelected = dist;
    // this.data.cloudantHttp(['sikkim', dist]).subscribe(
    //   response => {
    //     this.subDistrict =  response['subdistricts'];
    //   }
    // );

    // this.subDistrict = subdistrict(dist)['subdistricts'];
    // console.log(this.subDistrict, typeof(this.subDistrict));
    
    // let x = new Promise(res => {
    //   this.subDistrict = subdistrict2(dist);
    // })

    subdistrict2(dist).then(result => {
      this.subDistrict = result;
    })
    
    // this.subDistrict = subdistrict2(dist);
    console.log(this.subDistrict);

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

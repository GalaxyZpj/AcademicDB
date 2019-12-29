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
  schoolSelected: string;

  private district: string[];
  private subDistrict: string[];
  private schools: string[];

  constructor(private router: Router, private data: DataFetchService) { }

  ngOnInit() {
    this.district = this.data.fetchDistricts();
  }

  onSelectDistrict(dist: string) {
    this.districtSelected = dist;
    this.subDistrict = this.data.fetchSubDistricts(dist);
    this.districtChoosed = true;
  }

  onSelectSubDistrict(subDist: string) {
    this.subDistrictSelected = subDist;
    this.schools = this.data.fetchSchools(subDist);
    this.subDistrictChoosed = true;
  }

  onSelectSchool(school: string) {
    this.schoolSelected = school;
    this.router.navigate(['/school', this.districtSelected, this.subDistrictSelected, this.schoolSelected]);
  }
  
}

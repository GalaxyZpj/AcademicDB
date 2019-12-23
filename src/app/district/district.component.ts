import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  private district: string[];
  constructor(private router: Router) {
    this.district = ['East', 'West', 'North', 'South'];
  }

  ngOnInit() {
  }
}

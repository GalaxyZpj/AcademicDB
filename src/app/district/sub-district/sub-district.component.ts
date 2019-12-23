import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sub-district',
  templateUrl: './sub-district.component.html',
  styleUrls: ['./sub-district.component.css']
})
export class SubDistrictComponent implements OnInit, DoCheck {
  district: string;
  private subDistrict: string[];
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.district = params['dist'];
        console.log(this.district);
      }
    );
    this.setDistrict();
  }
  ngDoCheck() {
    this.setDistrict();
  }
  setDistrict() {
    switch(this.district) {
      case 'East':
        this.subDistrict = ['Ganktok', 'Pakyong', 'Rangpo', 'Rongli'];
        break;
      case 'West':
        this.subDistrict = ['Dentam', 'Gyalshing', 'Soreng', 'Yuksom'];
        break;
      case 'North':
        this.subDistrict = ['Chungthang', 'Dzongu', 'Kabi', 'Mangan'];
        break;
      case 'South':
        this.subDistrict = ['Jorethang', 'Namchi', 'Ravong', 'Yangang'];
        break;
    }
  }
}

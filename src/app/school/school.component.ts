import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit, DoCheck {
  private schools: string[];
  private subDistrict: string;
  private district: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.subDistrict = params['subDist'];
      }
    );
    this.setSchools();
  }
  ngDoCheck() {
    this.setSchools();
  }
  setSchools() {
    switch(this.subDistrict) {
      case 'Ganktok':
        this.schools = ['Ganktok School 1', 'Ganktok School 2', 'Ganktok School 3', 'Ganktok School 4', 'Ganktok School 5', ];
        break;
      case 'Pakyong':
        this.schools = ['Pakyong School 1', 'Pakyong School 2', 'Pakyong School 3', 'Pakyong School 4', 'Pakyong School 5', ];
        break;
      case 'Rangpo':
        this.schools = ['Rangpo School 1', 'Rangpo School 2', 'Rangpo School 3', 'Rangpo School 4', 'Rangpo School 5', ];
        break;
      case 'Rongli':
        this.schools = ['Rongli School 1', 'Rongli School 2', 'Rongli School 3', 'Rongli School 4', 'Rongli School 5', ];
        break;
      case 'Dentam':
        this.schools = ['Dentam School 1', 'Dentam School 2', 'Dentam School 3', 'Dentam School 4', 'Dentam School 5', ];
        break;
      case 'Gyalshing':
        this.schools = ['Gyalshing School 1', 'Gyalshing School 2', 'Gyalshing School 3', 'Gyalshing School 4', 'Gyalshing School 5', ];
        break;
      case 'Soreng':
        this.schools = ['Soreng School 1', 'Soreng School 2', 'Soreng School 3', 'Soreng School 4', 'Soreng School 5', ];
        break;
      case 'Yuksom':
        this.schools = ['Yuksom School 1', 'Yuksom School 2', 'Yuksom School 3', 'Yuksom School 4', 'Yuksom School 5', ];
        break;
      case 'Chungthang':
        this.schools = ['Chungthang School 1', 'Chungthang School 2', 'Chungthang School 3', 'Chungthang School 4', 'Chungthang School 5', ];
        break;
      case 'Dzongu':
        this.schools = ['Dzongu School 1', 'Dzongu School 2', 'Dzongu School 3', 'Dzongu School 4', 'Dzongu School 5'];
        break;
      case 'Kabi':
        this.schools = ['Kabi School 1', 'Kabi School 2', 'Kabi School 3', 'Kabi School 4', 'Kabi School 5', ];
        break;
      case 'Mangan':
        this.schools = ['Mangan School 1', 'Mangan School 2', 'Mangan School 3', 'Mangan School 4', 'Mangan School 5', ];
        break;
      case 'Jorethang':
        this.schools = ['Jorethang School 1', 'Jorethang School 2', 'Jorethang School 3', 'Jorethang School 4', 'Jorethang School 5', ];
        break;
      case 'Namchi':
        this.schools = ['Namchi School 1', 'Namchi School 2', 'Namchi School 3', 'Namchi School 4', 'Namchi School 5'];
        break;
      case 'Ravong':
        this.schools = ['Ravong School 1', 'Ravong School 2', 'Ravong School 3', 'Ravong School 4', 'Ravong School 5'];
        break;
      case 'Yangang':
        this.schools = ['Yangang School 1', 'Yangang School 2', 'Yangang School 3', 'Yangang School 4', 'Yangang School 5'];
        break;
    }
  }
  onSelectSchool(school: string) {
    console.log(school);
    this.router.navigate([school], {relativeTo: this.route});
  }
}
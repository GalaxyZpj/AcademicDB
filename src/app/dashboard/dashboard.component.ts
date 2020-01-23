import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  schoolcode: string = 's1001'
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickTile(operation: string, listType: string, chooser: string) {
    let goToPage: string; 
    
    switch(operation) {
      case 'schoolProfile':
        goToPage = 'schoolProfile';
        break;
      default:
        goToPage = listType;
    }

    this.router.navigate([goToPage], { queryParams: { 'schoolcode': this.schoolcode, 'operation': operation, 'chooser': chooser } });
  }
}

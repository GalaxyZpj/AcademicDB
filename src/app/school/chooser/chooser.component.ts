import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/shared/data-fetch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
  elementType: string;
  listcode: string;
  operation
  constructor(private data: DataFetchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.elementType = params['elementType'];
        this.listcode = params['listcode'];
      }
    );
  }
  redirectChooser(way: string) {
    let gotoURL: string;

    if(way == 'single') {
      gotoURL = this.elementType;
    } else {
      if (this.elementType == 'studentList') {
        // gotoURL = 'student'
      } else {
        // gotoURL = 
      }
    }
    
    this.router.navigate([gotoURL], { queryParamsHandling: 'merge' })
  }
}

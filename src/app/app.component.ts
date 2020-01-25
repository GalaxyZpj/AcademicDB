import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AcademicDB';
  constructor(private route: ActivatedRoute, private router: Router, private _location: Location) {}

  onBack() {
    // this.router.navigate(['../'], { relativeTo: this.route });
    this._location.back();
  }

}

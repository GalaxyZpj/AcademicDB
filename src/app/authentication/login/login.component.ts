import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataFetchService } from 'src/app/shared/data-fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataFetchService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log('logged in.');
  }
}

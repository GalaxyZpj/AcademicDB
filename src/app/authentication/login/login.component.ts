import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataFetchService } from 'src/app/shared/data-fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataFetchService, private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log('logged in.');
    console.log(form.value);
    this.http.post('http://academicdb-api.herokuapp.com/api/users/login/', 
                    {'username': form.value.username, 'password': form.value.password }).subscribe(
                      response => {
                        console.log(response)
                      }
                    );
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent implements OnInit {
  Email: string | any = '';
  Password: string | any = '';

  message: string = '';
  toggleStatus: Boolean = false;
  Toggle = () => {
    this.toggleStatus = false;
  };

  userExists = () => {
    this._dataService.userExists(this.Email, this.Password).subscribe((l) => {
      if (l.length == 0) {
        this.toggleStatus = true;
        this.message = 'Not successfull';
      }
      if (l != null) {
        l.forEach((element) => {
          if (element.userId >= 1) {
            this.toggleStatus = true;
            this.message = 'Login Successfull';
            sessionStorage.setItem('email', this.Email);
            sessionStorage.setItem('userId', element.userId);
          }
        });
      }
    });
  };

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    if (localStorage.getItem('Email') != '') {
      this.Email = localStorage.getItem('Email');
    }
  }
}

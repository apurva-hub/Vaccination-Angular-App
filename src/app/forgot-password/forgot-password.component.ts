import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  message: string = 'New Password confirmed!!';
  toggleStatus: Boolean = false;
  toggle = () => {
    this.toggleStatus = !this.toggleStatus;
  };
  constructor() {}

  ngOnInit(): void {}
}

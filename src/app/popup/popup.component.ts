import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @Input()
  toggleStatus: (() => void) | any;
  toggle = () => {
    this.toggleStatus();
  };

  @Input()
  error: string | undefined;

  isValid = false;
  constructor() {}

  ngOnInit(): void {
    if (this.error == 'Login Successfull') {
      this.isValid = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  test: string = 'a';
  toggleStatus: boolean = false;

  toggle = () => {
    this.toggleStatus = !this.toggleStatus;
  };
  constructor() {}

  ngOnInit(): void {}
}

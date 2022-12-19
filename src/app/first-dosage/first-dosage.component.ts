import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { dosageDetails } from '../dosageDetails';

@Component({
  selector: 'app-first-dosage',
  templateUrl: './first-dosage.component.html',
  styleUrls: ['./first-dosage.component.css'],
})
export class FirstDosageComponent implements OnInit {
  message: string = '';
  toggleStatus: Boolean = false;
  Toggle = () => {
    this.toggleStatus = false;
  };

  dosageData?: dosageDetails[];
  isRememberMeClicked: boolean = false;

  name: string = '';
  age: number = NaN;
  gender: boolean = true;
  dose1Date: Date | any;
  fatherName: string = '';
  phoneNo: string = '';
  aadhaarNumber: string = '';
  dose2Date = Date.now;
  isRegistered: boolean = false;

  constructor(private _dataService: DataService, private router: Router) {}

  getDosageData = () => {
    this._dataService.dosageDetails().subscribe((data) => {
      if (data.length > 0) {
        this.dosageData = data;
        this.isRegistered = true;
      }
    });
  };

  changeStatus() {
    this.isRememberMeClicked = !this.isRememberMeClicked;
    if (this.isRememberMeClicked == true) {
      var currentEmail = sessionStorage.getItem('email') || '';
      localStorage.setItem('Email', currentEmail);
      this.toggleStatus = true;
      this.message = 'Remembered successfully';
    }
  }

  logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');
    this.router.navigate(['']);
  };

  register = () => {
    if (
      this.name == '' ||
      this.age == NaN ||
      this.dose1Date == null ||
      this.fatherName == '' ||
      this.phoneNo == '' ||
      this.aadhaarNumber == ''
    ) {
      alert('Enter valid details');
    } else {
      this._dataService
        .addDosageDetails(
          this.name,
          this.age,
          this.gender,
          this.aadhaarNumber,
          this.fatherName,
          this.phoneNo,
          this.dose1Date
        )
        .subscribe((l) => {
          if (l == true) {
            this.getDosageData();
            this.isRegistered = true;
          }
        });
    }
  };

  ngOnInit(): void {
    this.getDosageData();
  }
}

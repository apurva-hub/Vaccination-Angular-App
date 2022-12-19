import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { dosageDetails } from '../dosageDetails';

@Component({
  selector: 'app-second-dosage',
  templateUrl: './second-dosage.component.html',
  styleUrls: ['./second-dosage.component.css'],
})
export class SecondDosageComponent implements OnInit {
  dosageData?: dosageDetails[];
  dosage2NotRegistered: boolean = false;
  dose2Date: Date | any;

  constructor(private _dataService: DataService, private router: Router) {}

  getDosageData = () => {
    this._dataService
      .dosageDetails()
      .subscribe((data) => (this.dosageData = data));
  };

  logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');

    this.router.navigate(['']);
  };

  isDosage2Registered = () => {
    this._dataService.dosageDetails().subscribe((data) => {
      data.forEach((element) => {
        if (element.dosage2Date == null || element.dosage2Date == '') {
          this.dosage2NotRegistered = true;
        }
      });
    });
  };

  updateDosage2Date = () => {
    this._dataService.updateDosage2Date(this.dose2Date).subscribe((data) => {
      if (data == true) {
        this.getDosageData();
        this.dosage2NotRegistered = false;
      }
    });
  };

  ngOnInit(): void {
    this.getDosageData();
    this.isDosage2Registered();
  }
}

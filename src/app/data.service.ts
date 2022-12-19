import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from './userData';
import { dosageDetails } from './dosageDetails';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private obj: HttpClient) {}

  userExists = (Email: string, Password: string) => {
    return this.obj.get<userData[]>(
      `https://localhost:7180/api/Register?email=${Email}&password=${Password}`
    );
  };

  dosageDetails = () => {
    return this.obj.get<dosageDetails[]>(
      `https://localhost:7180/api/Dosage/${sessionStorage.getItem('userId')}`
    );
  };

  addDosageDetails = (
    name: string,
    age: number,
    gender: boolean,
    aadhaar_no: string,
    father_name: string,
    phone_no: string,
    dosage1_date: Date
  ) => {
    return this.obj.post(
      `https://localhost:7180/api/Dosage?userId=${sessionStorage.getItem(
        'userId'
      )}&name=${name}&age=${age}&gender=${gender}&aadhaar_number=${aadhaar_no}&father_name=${father_name}&phone_no=${phone_no}&dosage1_date=${dosage1_date}`,
      null
    );
  };

  updateDosage2Date = (dosage2_date: Date) => {
    return this.obj.put(
      `https://localhost:7180/api/Dosage?userId=${sessionStorage.getItem(
        'userId'
      )}&dosage2_date=${dosage2_date}`,
      null
    );
  };
}

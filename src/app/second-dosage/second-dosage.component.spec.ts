import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { DataService } from '../data.service';

import { SecondDosageComponent } from './second-dosage.component';

describe('SecondDosageComponent', () => {
  let component: SecondDosageComponent;
  let fixture: ComponentFixture<SecondDosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondDosageComponent],
      providers: [DataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dosage2 date is null', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'dosageDetails').and.returnValue(
      of([
        {
          dosageId: 1,
          name: 'Apurva',
          age: 23,
          gender: true,
          aadhaarNumber: 1234,
          fatherName: 'xyz',
          phoneNo: 123456789,
          dosage1Date: 2022 - 10 - 10,
          dosage2Date: null,
        },
      ])
    );
    component.isDosage2Registered();
    expect(component.dosage2NotRegistered).toEqual(true);
  });

  it('dosage2 date is not null', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'dosageDetails').and.returnValue(
      of([
        {
          dosageId: 1,
          name: 'Apurva',
          age: 23,
          gender: true,
          aadhaarNumber: 1234,
          fatherName: 'xyz',
          phoneNo: 123456789,
          dosage1Date: 2022 - 10 - 10,
          dosage2Date: 2022 - 11 - 11,
        },
      ])
    );
    component.isDosage2Registered();
    expect(component.dosage2NotRegistered).toEqual(false);
  });

  it('dosage2 date is string', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'dosageDetails').and.returnValue(
      of([
        {
          dosageId: 1,
          name: 'Apurva',
          age: 23,
          gender: true,
          aadhaarNumber: 1234,
          fatherName: 'xyz',
          phoneNo: 123456789,
          dosage1Date: 2022 - 10 - 10,
          dosage2Date: '',
        },
      ])
    );
    component.isDosage2Registered();
    expect(component.dosage2NotRegistered).toEqual(true);
  });

  it('dosage2 date updated successfully', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'updateDosage2Date').and.returnValue(of([true]));
    component.updateDosage2Date();
    expect(component.dosage2NotRegistered).toEqual(false);
  });

  it('dosage2 date updated not successfully', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'updateDosage2Date').and.returnValue(of([false]));
    component.updateDosage2Date();
    expect(component.dosage2NotRegistered).toEqual(false);
  });

  it('passing empty array for updateDosage2Date function', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'updateDosage2Date').and.returnValue(of([]));
    component.updateDosage2Date();
    expect(component.dosage2NotRegistered).toEqual(false);
  });

  it('dosage2 data received', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'dosageDetails').and.returnValue(
      of([
        {
          dosageId: 1,
          name: 'Apurva',
          age: 23,
          gender: true,
          aadhaarNumber: 1234,
          fatherName: 'xyz',
          phoneNo: 123456789,
          dosage1Date: 2022 - 10 - 10,
          dosage2Date: 2022 - 11 - 11,
        },
      ])
    );
    component.getDosageData();
    expect(component.dosageData).toEqual([
      {
        dosageId: 1,
        name: 'Apurva',
        age: 23,
        gender: true,
        aadhaarNumber: 1234,
        fatherName: 'xyz',
        phoneNo: 123456789,
        dosage1Date: 2022 - 10 - 10,
        dosage2Date: 2022 - 11 - 11,
      },
    ]);
  });
});

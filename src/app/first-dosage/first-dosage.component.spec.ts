import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FirstDosageComponent } from './first-dosage.component';
import { of } from 'rxjs/internal/observable/of';
import { DataService } from '../data.service';

describe('FirstDosageComponent', () => {
  let component: FirstDosageComponent;
  let fixture: ComponentFixture<FirstDosageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstDosageComponent],
      providers: [DataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dosage data', () => {
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
    expect(component.isRegistered).toEqual(true);
  });

  it('dosage data is empty', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'dosageDetails').and.returnValue(of([]));
    component.getDosageData();
    expect(component.dosageData).toEqual(undefined);
    expect(component.isRegistered).toEqual(false);
  });

  it('register dosage successfull', () => {
    component.name = 'Apurva';
    component.age = 23;
    component.gender = true;
    component.aadhaarNumber = '1234';
    component.fatherName = 'xyz';
    component.phoneNo = '123456789';
    component.dose1Date = 2022 - 10 - 10;
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'addDosageDetails').and.returnValue(of(true));
    component.register();
    expect(component.isRegistered).toEqual(true);
  });

  it('register dosage not successfull', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'addDosageDetails').and.returnValue(of(false));
    component.register();
    expect(component.isRegistered).toEqual(false);
  });

  it('register dosage not successfull by passing null value', () => {
    component.name = '';
    component.age = 23;
    component.gender = true;
    component.aadhaarNumber = '1234';
    component.fatherName = 'xyz';
    component.phoneNo = '123456789';
    component.dose1Date = 2022 - 10 - 10;
    const service = fixture.debugElement.injector.get(DataService);
    component.register();
    expect(component.isRegistered).toEqual(false);
  });
});

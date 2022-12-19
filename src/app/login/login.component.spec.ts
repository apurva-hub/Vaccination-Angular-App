import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { of } from 'rxjs/internal/observable/of';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [DataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user not exists', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'userExists').and.returnValue(of([]));
    component.userExists();
    expect(component.toggleStatus).toEqual(true);
    expect(component.message).toEqual('Not successfull');
  });

  it('user exists', () => {
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, 'userExists').and.returnValue(of([{ userId: 23 }]));
    component.userExists();
    expect(component.toggleStatus).toEqual(true);
    expect(component.message).toEqual('Login Successfull');
  });

  it('toggle function changes toggle status to false', () => {
    component.Toggle();
    expect(component.toggleStatus).toEqual(false);
  });
});

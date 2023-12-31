import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerApplicationComponent } from './web-customer-application.component';

describe('WebCustomerApplicationComponent', () => {
  let component: WebCustomerApplicationComponent;
  let fixture: ComponentFixture<WebCustomerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerDataAccessComponent } from './web-customer-data-access.component';

describe('WebCustomerDataAccessComponent', () => {
  let component: WebCustomerDataAccessComponent;
  let fixture: ComponentFixture<WebCustomerDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerDataAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

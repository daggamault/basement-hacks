import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerUtilsComponent } from './web-customer-utils.component';

describe('WebCustomerUtilsComponent', () => {
  let component: WebCustomerUtilsComponent;
  let fixture: ComponentFixture<WebCustomerUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerUtilsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

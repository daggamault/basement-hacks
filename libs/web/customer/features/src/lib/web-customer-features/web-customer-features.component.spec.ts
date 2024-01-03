import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerFeaturesComponent } from './web-customer-features.component';

describe('WebCustomerFeaturesComponent', () => {
  let component: WebCustomerFeaturesComponent;
  let fixture: ComponentFixture<WebCustomerFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerFeaturesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

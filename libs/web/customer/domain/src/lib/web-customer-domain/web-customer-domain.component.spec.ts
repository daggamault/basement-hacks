import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerDomainComponent } from './web-customer-domain.component';

describe('WebCustomerDomainComponent', () => {
  let component: WebCustomerDomainComponent;
  let fixture: ComponentFixture<WebCustomerDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

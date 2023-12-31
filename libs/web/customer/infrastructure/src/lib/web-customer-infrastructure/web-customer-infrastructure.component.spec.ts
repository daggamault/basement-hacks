import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerInfrastructureComponent } from './web-customer-infrastructure.component';

describe('WebCustomerInfrastructureComponent', () => {
  let component: WebCustomerInfrastructureComponent;
  let fixture: ComponentFixture<WebCustomerInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerInfrastructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

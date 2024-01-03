import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCustomerUiComponent } from './web-customer-ui.component';

describe('WebCustomerUiComponent', () => {
  let component: WebCustomerUiComponent;
  let fixture: ComponentFixture<WebCustomerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCustomerUiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCustomerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

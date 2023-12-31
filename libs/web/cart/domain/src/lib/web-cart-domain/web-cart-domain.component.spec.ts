import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartDomainComponent } from './web-cart-domain.component';

describe('WebCartDomainComponent', () => {
  let component: WebCartDomainComponent;
  let fixture: ComponentFixture<WebCartDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

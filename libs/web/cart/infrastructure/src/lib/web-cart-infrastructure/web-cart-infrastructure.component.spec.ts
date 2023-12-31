import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartInfrastructureComponent } from './web-cart-infrastructure.component';

describe('WebCartInfrastructureComponent', () => {
  let component: WebCartInfrastructureComponent;
  let fixture: ComponentFixture<WebCartInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartInfrastructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

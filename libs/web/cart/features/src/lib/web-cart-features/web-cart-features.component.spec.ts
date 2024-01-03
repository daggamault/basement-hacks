import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartFeaturesComponent } from './web-cart-features.component';

describe('WebCartFeaturesComponent', () => {
  let component: WebCartFeaturesComponent;
  let fixture: ComponentFixture<WebCartFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartFeaturesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

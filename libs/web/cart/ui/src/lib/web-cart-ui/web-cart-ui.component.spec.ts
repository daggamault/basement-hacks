import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartUiComponent } from './web-cart-ui.component';

describe('WebCartUiComponent', () => {
  let component: WebCartUiComponent;
  let fixture: ComponentFixture<WebCartUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartUiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

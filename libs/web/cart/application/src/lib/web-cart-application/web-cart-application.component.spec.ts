import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartApplicationComponent } from './web-cart-application.component';

describe('WebCartApplicationComponent', () => {
  let component: WebCartApplicationComponent;
  let fixture: ComponentFixture<WebCartApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

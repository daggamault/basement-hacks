import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartDataAccessComponent } from './web-cart-data-access.component';

describe('WebCartDataAccessComponent', () => {
  let component: WebCartDataAccessComponent;
  let fixture: ComponentFixture<WebCartDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartDataAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCartUtilsComponent } from './web-cart-utils.component';

describe('WebCartUtilsComponent', () => {
  let component: WebCartUtilsComponent;
  let fixture: ComponentFixture<WebCartUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCartUtilsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCartUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAuthFeaturesComponent } from './web-auth-features.component';

describe('WebAuthFeaturesComponent', () => {
  let component: WebAuthFeaturesComponent;
  let fixture: ComponentFixture<WebAuthFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAuthFeaturesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAuthFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

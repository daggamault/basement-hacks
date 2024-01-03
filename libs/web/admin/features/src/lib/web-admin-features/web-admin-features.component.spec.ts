import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminFeaturesComponent } from './web-admin-features.component';

describe('WebAdminFeaturesComponent', () => {
  let component: WebAdminFeaturesComponent;
  let fixture: ComponentFixture<WebAdminFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminFeaturesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminApplicationComponent } from './web-admin-application.component';

describe('WebAdminApplicationComponent', () => {
  let component: WebAdminApplicationComponent;
  let fixture: ComponentFixture<WebAdminApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

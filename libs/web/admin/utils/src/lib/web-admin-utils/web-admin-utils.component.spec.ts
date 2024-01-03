import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminUtilsComponent } from './web-admin-utils.component';

describe('WebAdminUtilsComponent', () => {
  let component: WebAdminUtilsComponent;
  let fixture: ComponentFixture<WebAdminUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminUtilsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

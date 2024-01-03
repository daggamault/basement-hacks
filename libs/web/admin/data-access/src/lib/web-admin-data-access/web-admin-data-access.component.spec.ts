import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminDataAccessComponent } from './web-admin-data-access.component';

describe('WebAdminDataAccessComponent', () => {
  let component: WebAdminDataAccessComponent;
  let fixture: ComponentFixture<WebAdminDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminDataAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

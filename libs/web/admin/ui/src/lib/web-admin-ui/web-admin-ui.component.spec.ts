import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminUiComponent } from './web-admin-ui.component';

describe('WebAdminUiComponent', () => {
  let component: WebAdminUiComponent;
  let fixture: ComponentFixture<WebAdminUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminUiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

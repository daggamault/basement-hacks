import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminInfrastructureComponent } from './web-admin-infrastructure.component';

describe('WebAdminInfrastructureComponent', () => {
  let component: WebAdminInfrastructureComponent;
  let fixture: ComponentFixture<WebAdminInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminInfrastructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

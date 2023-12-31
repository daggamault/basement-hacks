import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAdminDomainComponent } from './web-admin-domain.component';

describe('WebAdminDomainComponent', () => {
  let component: WebAdminDomainComponent;
  let fixture: ComponentFixture<WebAdminDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAdminDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebAdminDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

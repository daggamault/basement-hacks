import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAuthDataAccessComponent } from './web-auth-data-access.component';

describe('WebAuthDataAccessComponent', () => {
  let component: WebAuthDataAccessComponent;
  let fixture: ComponentFixture<WebAuthDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAuthDataAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAuthDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

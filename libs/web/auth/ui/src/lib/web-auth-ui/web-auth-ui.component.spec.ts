import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAuthUiComponent } from './web-auth-ui.component';

describe('WebAuthUiComponent', () => {
  let component: WebAuthUiComponent;
  let fixture: ComponentFixture<WebAuthUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAuthUiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAuthUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

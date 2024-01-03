import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebAuthUtilsComponent } from './web-auth-utils.component';

describe('WebAuthUtilsComponent', () => {
  let component: WebAuthUtilsComponent;
  let fixture: ComponentFixture<WebAuthUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebAuthUtilsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebAuthUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebSharedDataAccessComponent } from './web-shared-data-access.component';

describe('WebSharedDataAccessComponent', () => {
  let component: WebSharedDataAccessComponent;
  let fixture: ComponentFixture<WebSharedDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedDataAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

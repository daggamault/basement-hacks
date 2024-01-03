import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebSharedUiComponent } from './web-shared-ui.component';

describe('WebSharedUiComponent', () => {
  let component: WebSharedUiComponent;
  let fixture: ComponentFixture<WebSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedUiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

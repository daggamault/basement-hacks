import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogUiComponent } from './web-catalog-ui.component';

describe('WebCatalogUiComponent', () => {
  let component: WebCatalogUiComponent;
  let fixture: ComponentFixture<WebCatalogUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogUiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

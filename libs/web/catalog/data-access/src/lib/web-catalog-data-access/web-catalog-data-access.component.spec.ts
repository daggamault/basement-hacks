import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogDataAccessComponent } from './web-catalog-data-access.component';

describe('WebCatalogDataAccessComponent', () => {
  let component: WebCatalogDataAccessComponent;
  let fixture: ComponentFixture<WebCatalogDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogDataAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

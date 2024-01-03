import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogUtilsComponent } from './web-catalog-utils.component';

describe('WebCatalogUtilsComponent', () => {
  let component: WebCatalogUtilsComponent;
  let fixture: ComponentFixture<WebCatalogUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogUtilsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogFeaturesComponent } from './web-catalog-features.component';

describe('WebCatalogFeaturesComponent', () => {
  let component: WebCatalogFeaturesComponent;
  let fixture: ComponentFixture<WebCatalogFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogFeaturesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

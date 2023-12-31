import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogDomainComponent } from './web-catalog-domain.component';

describe('WebCatalogDomainComponent', () => {
  let component: WebCatalogDomainComponent;
  let fixture: ComponentFixture<WebCatalogDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogInfrastructureComponent } from './web-catalog-infrastructure.component';

describe('WebCatalogInfrastructureComponent', () => {
  let component: WebCatalogInfrastructureComponent;
  let fixture: ComponentFixture<WebCatalogInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogInfrastructureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

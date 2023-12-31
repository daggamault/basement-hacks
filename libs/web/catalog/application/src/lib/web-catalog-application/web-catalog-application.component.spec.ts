import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebCatalogApplicationComponent } from './web-catalog-application.component';

describe('WebCatalogApplicationComponent', () => {
  let component: WebCatalogApplicationComponent;
  let fixture: ComponentFixture<WebCatalogApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebCatalogApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebCatalogApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

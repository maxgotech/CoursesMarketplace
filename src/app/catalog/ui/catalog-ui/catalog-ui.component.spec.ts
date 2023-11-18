import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUiComponent } from './catalog-ui.component';

describe('CatalogUiComponent', () => {
  let component: CatalogUiComponent;
  let fixture: ComponentFixture<CatalogUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CatalogUiComponent]
});
    fixture = TestBed.createComponent(CatalogUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

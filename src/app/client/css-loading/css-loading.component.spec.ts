import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLoadingComponent } from './css-loading.component';

describe('CssLoadingComponent', () => {
  let component: CssLoadingComponent;
  let fixture: ComponentFixture<CssLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

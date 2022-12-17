import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTableComponent } from './prod-table.component';

describe('ProdTableComponent', () => {
  let component: ProdTableComponent;
  let fixture: ComponentFixture<ProdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

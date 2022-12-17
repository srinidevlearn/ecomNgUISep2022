import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdManagmentComponent } from './prod-managment.component';

describe('ProdManagmentComponent', () => {
  let component: ProdManagmentComponent;
  let fixture: ComponentFixture<ProdManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

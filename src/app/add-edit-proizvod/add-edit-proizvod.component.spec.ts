import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProizvodComponent } from './add-edit-proizvod.component';

describe('AddEditProizvodComponent', () => {
  let component: AddEditProizvodComponent;
  let fixture: ComponentFixture<AddEditProizvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProizvodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

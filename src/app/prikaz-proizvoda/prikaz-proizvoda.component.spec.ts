import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazProizvodaComponent } from './prikaz-proizvoda.component';

describe('PrikazProizvodaComponent', () => {
  let component: PrikazProizvodaComponent;
  let fixture: ComponentFixture<PrikazProizvodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazProizvodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrikazProizvodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

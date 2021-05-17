import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEspecialidadeComponent } from './add-especialidade.component';

describe('AddEspecialidadeComponent', () => {
  let component: AddEspecialidadeComponent;
  let fixture: ComponentFixture<AddEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEspecialidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

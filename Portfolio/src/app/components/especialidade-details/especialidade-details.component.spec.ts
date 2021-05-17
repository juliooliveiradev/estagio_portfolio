import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeDetailsComponent } from './especialidade-details.component';

describe('EspecialidadeDetailsComponent', () => {
  let component: EspecialidadeDetailsComponent;
  let fixture: ComponentFixture<EspecialidadeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

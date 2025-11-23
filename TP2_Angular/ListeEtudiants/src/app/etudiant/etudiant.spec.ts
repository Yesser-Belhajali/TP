import { ComponentFixture, TestBed } from '@angular/core/testing';

import { etudiant } from './etudiant';

describe('etudiant', () => {
  let component: etudiant;
  let fixture: ComponentFixture<etudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [etudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(etudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

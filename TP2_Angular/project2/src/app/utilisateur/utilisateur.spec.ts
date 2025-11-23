import { ComponentFixture, TestBed } from '@angular/core/testing';

import { utilisateur } from './utilisateur';

describe('utilisateur', () => {
  let component: utilisateur;
  let fixture: ComponentFixture<utilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [utilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(utilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

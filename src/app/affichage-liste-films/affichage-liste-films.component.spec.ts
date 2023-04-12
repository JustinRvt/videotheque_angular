import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageListeFilmsComponent } from './affichage-liste-films.component';

describe('AffichageListeFilmsComponent', () => {
  let component: AffichageListeFilmsComponent;
  let fixture: ComponentFixture<AffichageListeFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageListeFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageListeFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

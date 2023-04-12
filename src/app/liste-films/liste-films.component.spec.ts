import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilmsComponent } from './liste-films.component';

describe('ListeFilmsComponent', () => {
  let component: ListeFilmsComponent;
  let fixture: ComponentFixture<ListeFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

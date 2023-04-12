import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNonTrouveeComponent } from './page-non-trouvee.component';

describe('PageNonTrouveeComponent', () => {
  let component: PageNonTrouveeComponent;
  let fixture: ComponentFixture<PageNonTrouveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNonTrouveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNonTrouveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

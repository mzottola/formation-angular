import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovoiturageSimpleComponent } from './covoiturage-simple.component';

describe('CovoiturageSimpleComponent', () => {
  let component: CovoiturageSimpleComponent;
  let fixture: ComponentFixture<CovoiturageSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovoiturageSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovoiturageSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

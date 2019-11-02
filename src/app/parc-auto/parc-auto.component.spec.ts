import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcAutoComponent } from './parc-auto.component';

describe('ParcAutoComponent', () => {
  let component: ParcAutoComponent;
  let fixture: ComponentFixture<ParcAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

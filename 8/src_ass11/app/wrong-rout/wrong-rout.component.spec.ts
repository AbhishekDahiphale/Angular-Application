import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongRoutComponent } from './wrong-rout.component';

describe('WrongRoutComponent', () => {
  let component: WrongRoutComponent;
  let fixture: ComponentFixture<WrongRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongRoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

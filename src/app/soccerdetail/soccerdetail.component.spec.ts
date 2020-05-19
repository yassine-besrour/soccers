import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerdetailComponent } from './soccerdetail.component';

describe('SoccerdetailComponent', () => {
  let component: SoccerdetailComponent;
  let fixture: ComponentFixture<SoccerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

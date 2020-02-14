import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamlazyComponent } from './iamlazy.component';

describe('IamlazyComponent', () => {
  let component: IamlazyComponent;
  let fixture: ComponentFixture<IamlazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamlazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamlazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

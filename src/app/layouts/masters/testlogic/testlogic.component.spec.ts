import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlogicComponent } from './testlogic.component';

describe('TestlogicComponent', () => {
  let component: TestlogicComponent;
  let fixture: ComponentFixture<TestlogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

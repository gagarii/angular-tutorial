import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageesComponent } from './messagees.component';

describe('MessageesComponent', () => {
  let component: MessageesComponent;
  let fixture: ComponentFixture<MessageesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

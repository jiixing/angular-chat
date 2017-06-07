import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLineComponent } from './message-line.component';

describe('MessageLineComponent', () => {
  let component: MessageLineComponent;
  let fixture: ComponentFixture<MessageLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblockComponent } from './updateblock.component';

describe('UpdateblockComponent', () => {
  let component: UpdateblockComponent;
  let fixture: ComponentFixture<UpdateblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

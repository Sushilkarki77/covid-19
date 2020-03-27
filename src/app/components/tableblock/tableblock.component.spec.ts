import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableblockComponent } from './tableblock.component';

describe('TableblockComponent', () => {
  let component: TableblockComponent;
  let fixture: ComponentFixture<TableblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

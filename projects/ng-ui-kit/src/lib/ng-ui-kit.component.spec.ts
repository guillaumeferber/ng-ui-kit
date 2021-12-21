import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiKitComponent } from './ng-ui-kit.component';

describe('NgUiKitComponent', () => {
  let component: NgUiKitComponent;
  let fixture: ComponentFixture<NgUiKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUiKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

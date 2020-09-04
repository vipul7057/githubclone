import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfilesComponent } from './showfiles.component';

describe('ShowfilesComponent', () => {
  let component: ShowfilesComponent;
  let fixture: ComponentFixture<ShowfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

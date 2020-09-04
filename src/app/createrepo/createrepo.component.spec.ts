import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterepoComponent } from './createrepo.component';

describe('CreaterepoComponent', () => {
  let component: CreaterepoComponent;
  let fixture: ComponentFixture<CreaterepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

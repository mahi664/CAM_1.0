import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationbarComponent } from './top-navigationbar.component';

describe('TopNavigationbarComponent', () => {
  let component: TopNavigationbarComponent;
  let fixture: ComponentFixture<TopNavigationbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavigationbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

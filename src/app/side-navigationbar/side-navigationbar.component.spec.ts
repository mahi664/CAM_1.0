import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationbarComponent } from './side-navigationbar.component';

describe('SideNavigationbarComponent', () => {
  let component: SideNavigationbarComponent;
  let fixture: ComponentFixture<SideNavigationbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

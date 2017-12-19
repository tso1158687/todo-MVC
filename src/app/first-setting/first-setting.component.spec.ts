import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSettingComponent } from './first-setting.component';

describe('FirstSettingComponent', () => {
  let component: FirstSettingComponent;
  let fixture: ComponentFixture<FirstSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

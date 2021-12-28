import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmHomeComponent } from './ibm-home.component';

describe('IbmHomeComponent', () => {
  let component: IbmHomeComponent;
  let fixture: ComponentFixture<IbmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbmHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

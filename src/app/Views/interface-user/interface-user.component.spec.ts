import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUserComponent } from './interface-user.component';

describe('InterfaceUserComponent', () => {
  let component: InterfaceUserComponent;
  let fixture: ComponentFixture<InterfaceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

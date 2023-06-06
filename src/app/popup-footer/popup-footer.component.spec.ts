import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFooterComponent } from './popup-footer.component';

describe('PopupFooterComponent', () => {
  let component: PopupFooterComponent;
  let fixture: ComponentFixture<PopupFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupFooterComponent]
    });
    fixture = TestBed.createComponent(PopupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

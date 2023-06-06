import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuoteComponent } from './create-quote.component';
import { PopupContentComponent } from '../popup-content/popup-content.component';
import { PopupFooterComponent } from '../popup-footer/popup-footer.component';
import { FormsModule } from '@angular/forms';

describe('CreateQuoteComponent', () => {
  let component: CreateQuoteComponent;
  let fixture: ComponentFixture<CreateQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuoteComponent,PopupContentComponent,PopupFooterComponent],
      imports : [FormsModule]
    });
    fixture = TestBed.createComponent(CreateQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

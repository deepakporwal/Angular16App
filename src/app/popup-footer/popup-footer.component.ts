import { Component, Input, OnInit } from '@angular/core';
import { AdditionalCoverItem } from '../models/additionalCoverItem.model';

@Component({
  selector: 'app-popup-footer',
  templateUrl: './popup-footer.component.html',
  styleUrls: ['./popup-footer.component.scss']
})
export class PopupFooterComponent implements OnInit {
  @Input() coverItem : AdditionalCoverItem[];

  ngOnInit(): void {
    console.log(this.coverItem);
  }

  disableButton() {
    return true;
  }
}

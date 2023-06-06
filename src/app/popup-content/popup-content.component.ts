import { Component, Input, OnInit } from '@angular/core';
import { AdditionalCoverItem } from '../models/additionalCoverItem.model';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.scss']
})
export class PopupContentComponent implements OnInit {

  @Input() coverItem : AdditionalCoverItem[];
  itemname : string;

  ngOnInit(): void {
    console.log('before',this.coverItem);  
  }

  enableButton()
  {
    if(this.coverItem.length){
      this.coverItem[0].addBtnEnabled = false;
    }
  }

  disableButton()
  {
    if(this.coverItem.length){
      this.coverItem[0].addBtnEnabled = true;
    }
  }

  addItem(){
    if(this.coverItem.length ==1){
      this.coverItem.pop();
    }
    this.coverItem.push({itemCategory : 'personal',addBtnEnabled : true,itemName: this.itemname ,itemDesc : 'personal device'});
  }
}

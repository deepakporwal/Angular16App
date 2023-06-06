import { Component, OnInit } from '@angular/core';
import { AdditionalCoverItem } from '../models/additionalCoverItem.model';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {
  
  coverItem : AdditionalCoverItem[] 

  ngOnInit(): void {
    this.coverItem = [ new AdditionalCoverItem()];
  }

  onEdit(item){
    console.log(item);
  }
}

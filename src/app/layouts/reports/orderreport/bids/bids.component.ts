import { Component, OnInit, Input } from '@angular/core';

import { Bid } from '../../shared/index';


@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss']
})
export class BidsComponent{

  @Input() bids: Bid[];

  displayedColumns: string[] = [
    'subOrderId',
    'bidName',
    'bidValue',
    'biduserStatus',
    'originalRate',
    'exhibitionDate'
  ];
  constructor() { }


}

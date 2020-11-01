import { Component, OnInit, Input } from '@angular/core';

import { subOrder } from '../../shared/index';

@Component({
  selector: 'app-suborders',
  templateUrl: './suborders.component.html',
  styleUrls: ['./suborders.component.scss']
})
export class SubordersComponent{
  @Input() subOrders: subOrder[];
  displayedColumns: string[] = [
    'expandIcon',
    'subOrderId',
    'orderId',
    'subOrderTotalMargin',
    'SubOrderDate',
    'containerMasterName',
    'weightDesc',
    'suborderStatus'
  ];

  constructor() { }


}

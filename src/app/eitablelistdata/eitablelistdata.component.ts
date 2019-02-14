import { Component, OnInit, Input } from '@angular/core';
import { ProductStockDetail } from '../models/LandingModel';

@Component({
  selector: 'app-eitablelistdata',
  templateUrl: './eitablelistdata.component.html',
  styleUrls: ['./eitablelistdata.component.scss']
})
export class EitablelistdataComponent implements OnInit {
  @Input() totalproducts: Map<string, Map<string | number, ProductStockDetail>>;

  constructor() { }

  ngOnInit() {
    this.totalproducts.forEach(product => console.log(product));
    console.log('Products: '+this.totalproducts);
  }

}

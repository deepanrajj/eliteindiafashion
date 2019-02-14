import { Component, OnInit, Input } from '@angular/core';
import { EifashionapiService } from '../eifashionapi.service';
import { ProductsModel } from '../models/ProductsModel';
import { TransformmodalproductresponseService } from './transformmodalproductresponse.service';

@Component({
  selector: 'app-eifashiondetailsmodal',
  templateUrl: './eifashiondetailsmodal.component.html',
  styleUrls: ['./eifashiondetailsmodal.component.scss']
})
export class EifashiondetailsmodalComponent implements OnInit {
  @Input() productid: string;
  productModel: ProductsModel;

  constructor(private readonly apiService:  EifashionapiService,
    private readonly transformModalProductResponse: TransformmodalproductresponseService) { }

  ngOnInit() {
    console.log(this.productid);
    this.getProductData();
    //let el: HTMLElement = document.getElementById('eimodal') as HTMLElement;
    // el.click();
  }

  getProductData(): void {
    this.apiService
    .getProduct(this.productid)
    .subscribe((product:  ProductApi.Product) => {
      this.productModel = this.transformModalProductResponse.transform(product[0]);
      console.log(this.productModel);
    });
  }
}

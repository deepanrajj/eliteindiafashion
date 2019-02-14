import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../models/ProductsModel';
import { EifashionapiService } from '../eifashionapi.service';
import { TransformproductsresponseService } from './transformproductsresponse.service';

@Component({
  selector: 'app-eifashionproducts',
  templateUrl: './eifashionproducts.component.html',
  styleUrls: ['./eifashionproducts.component.scss']
})
export class EifashionproductsComponent implements OnInit {
  productsModel: ProductsModel[];

  constructor( private readonly apiService:  EifashionapiService,
               private readonly transformProductsResponse: TransformproductsresponseService) { }

  ngOnInit() {
    this.getProductsData();
  }

  onClick() {
    console.log('clicked');
  }

  getProductsData(): void {
    this.apiService
    .getProducts()
    .subscribe((products:  ProductApi.Product[]) => {
      this.productsModel = this.transformProductsResponse.transform(products);
      //console.log(this.productsModel);
    });
  }
}

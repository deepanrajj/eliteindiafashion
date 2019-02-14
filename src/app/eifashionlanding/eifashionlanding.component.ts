import { Component, OnInit } from '@angular/core';
import { EifashionapiService } from '../eifashionapi.service';
import { TransformproductresponseService } from './transformproductresponse.service';
import { LandingModel } from '../models/LandingModel';

@Component({
  selector: 'app-eifashionlanding',
  templateUrl: './eifashionlanding.component.html',
  styleUrls: ['./eifashionlanding.component.scss']
})
export class EifashionlandingComponent implements OnInit {
  landingModel: LandingModel ;
  
  constructor( private readonly apiService:  EifashionapiService,
               private readonly transformProductResponse: TransformproductresponseService ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.apiService
    .getProducts()
    .subscribe((products:  ProductApi.Product[]) => {
      this.landingModel = this.transformProductResponse.transform(products);
      console.log(this.landingModel);
      //this.products = products;
    });
  }

}

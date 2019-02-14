import { Injectable } from '@angular/core';
import { ProductsModel, ProductSizeDetail, ProductColorDetail } from '../models/ProductsModel';

@Injectable({
  providedIn: 'root'
})
export class TransformmodalproductresponseService {

  constructor() { }

  transform(product: ProductApi.Product): ProductsModel {
    
    
    return {
      'uid': product.uid,
      'productname': product.item,
      'brand': product.brand,
      'producttype': product.producttype,
      'imagesrc': product.images[0],
      'color': this.transformColor(product.productdetails),
      'stock': this.transformProductDetails(product.productdetails)
    };
  }

  transformProductDetails(productdetails: ProductApi.ProductDetails[]): ProductSizeDetail[] {
    /* Grouping the array objects with same size and summing the stock and sold value */
    let helper = {};

    return productdetails.map(productdetail => {
      return {
        'pdid': [productdetail.pdid],
        'size': productdetail.size,
        'stock': productdetail.instock,
        'sold': productdetail.sold
      };
    }, []).reduce(function(r, o) {
      var key = o.size;
      if(!helper[key]) {
        helper[key] =  o; // create a copy of o
        r.push(helper[key]);
      } else {
        helper[key].stock += o.stock;
        helper[key].sold += o.sold;
        helper[key].pdid.push(o.pdid);

        /* if(helper[key].pdid instanceof Array) {
          helper[key].pdid.push(o.pdid);
        } else {
          helper[key].pdid = [helper[key].pdid, o.pdid];
        } */
      }
    
      return r;
    }, []).sort((a,b) => (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0)); 
  }

  transformColor(productdetails: ProductApi.ProductDetails[]): ProductColorDetail[] {
    /* Grouping the array objects with same color */
    let helper = {};
    return productdetails.map(productdetail => {
      return {
        'pdid': [productdetail.pdid],
        'color': productdetail.color,
        'empty': productdetail.instock == 0
      }
    }, []).reduce(function(r, o) {
      var key = o.color;
      
      if(!helper[key]) {
        helper[key] =  o; // create a copy of o
        r.push(helper[key]);
      } else {
        helper[key].pdid.push(o.pdid);
        if(helper[key].empty) {
          helper[key].empty = o.empty;
        }
        /* if(helper[key].pdid instanceof Array) {
          helper[key].pdid.push(o.pdid);
        } else {
          helper[key].pdid = [helper[key].pdid, o.pdid];
        } */
      }
    
      return r;
    }, []);
  }

}

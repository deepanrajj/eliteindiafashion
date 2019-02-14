import { Injectable } from '@angular/core';
import { ProductsModel, ProductSizeDetail } from '../models/ProductsModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransformproductsresponseService {

  constructor() { }

  transform(products: ProductApi.Product[]): ProductsModel[] {
    console.log(products);
    
    let transformedProducts: ProductsModel[] = products.map(product => {

      /* Grouping the array objects with same size and summing the stock value */
      let helper = {};
      let productsize: ProductSizeDetail[] = product.productdetails.map(productdetail => {
        return {
          'size': productdetail.size,
          'stock': productdetail.instock
        };
      }, []).reduce(function(r, o) {
        var key = o.size;
        
        if(!helper[key]) {
          helper[key] =  o; // create a copy of o
          r.push(helper[key]);
        } else {
          helper[key].stock += o.stock;
        }
      
        return r;
      }, []).sort((a,b) => (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0)); ;

      /* Calculating the best selling products & stock availabilty */
      let stockLevel: string[] = [];
      
      //Grouping the product sizes and summing up the sold products  
      helper = {};
      let productsSold = product.productdetails.map(productdetail => {
        return {
          'size': productdetail.size,
          'sold': productdetail.sold
        }
      }, []).reduce(function(r, o) {
        var key = o.size;
        
        if(!helper[key]) {
          helper[key] =  o; // create a copy of o
          r.push(helper[key]);
        } else {
          helper[key].sold += o.sold;
        }
      
        return r;
      }, []);

      productsSold.forEach(product => console.log(product));

      if (productsSold.some(productdetail => productdetail.sold >= environment.bestseller)) {
        if(!stockLevel.includes('bestseller')) { stockLevel.push('bestseller'); }
      } 
      if(productsize.some(productdetail => productdetail.stock == environment.emptystock)) {
        if(!stockLevel.includes('outofstock')) { stockLevel.push('outofstock'); }
      } 
      if(productsize.some(productdetail => productdetail.stock < environment.lowstock)) {
        if(!stockLevel.includes('lowstock')) { stockLevel.push('lowstock'); }
      }
      
      return {
        'uid': product.uid,
        'productname': product.item,
        'brand': product.brand,
        'producttype': product.producttype,
        'imagesrc': product.images[0],
        'stock': productsize,
        'stocklevel': (stockLevel.length > 0)? stockLevel : null
      };
    }, []);

    return transformedProducts;
  }
}

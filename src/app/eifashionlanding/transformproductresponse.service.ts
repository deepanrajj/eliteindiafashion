import { Injectable } from '@angular/core';
import { LandingModel, ProductStockDetail } from '../models/LandingModel';

@Injectable({
  providedIn: 'root'
})
export class TransformproductresponseService {

  constructor() { }

  transform(products: ProductApi.Product[]): LandingModel {
    //products.forEach(product => console.log(product));
    // Calculating the total number of products instock
    const totalInStock = products.map(product => product.productdetails
                                                  .map(productdetail => productdetail.instock)
                                                  .reduce((acc, instock) => acc + instock, 0))
                                .reduce((accumulator, total) => accumulator + total, 0);
    
    // Calculating the total number of sold products
    const totalSold = products.map(product => product.productdetails
                                              .map(productdetail => productdetail.sold)
                                              .reduce((acc, sold) => acc + sold, 0))
                            .reduce((accumulator, total) => accumulator + total, 0);
   
    // Calculating the total brands available in store
    const totalBrands = products.filter((s1, pos, product) => product.findIndex((s2)=> s2.brand === s1.brand) === pos).length;
    
    // Generating values for table of available product types
    let totalProducts:Map<string, Map<string | number, ProductStockDetail>> = new Map<string, Map<string | number, ProductStockDetail>>();
    let productDetailsMap: Map<string | number, ProductStockDetail> = new Map<string | number, ProductStockDetail>(); 
    products.forEach(product => {
      if(!totalProducts.get(product.producttype)) {
        product.productdetails.forEach(productdetail => {
          if(!productDetailsMap.get(productdetail.size)) {
            productDetailsMap.set(productdetail.size, { 'instock': productdetail.instock, 'sold': productdetail.sold  });
          } else {
            let updateSizeDetail = productDetailsMap.get(productdetail.size);
            updateSizeDetail.instock = updateSizeDetail.instock + productdetail.instock;
            updateSizeDetail.sold = updateSizeDetail.sold + productdetail.sold;
            productDetailsMap.set(productdetail.size, updateSizeDetail);
          }
        });
        totalProducts.set(product.producttype, productDetailsMap);
        productDetailsMap  = new Map<string | number, ProductStockDetail>();
      } else {
        let updateProductDetail = totalProducts.get(product.producttype);
        product.productdetails.forEach(productdetail => {
          if(!updateProductDetail.get(productdetail.size)) {
            updateProductDetail.set(productdetail.size, { 'instock': productdetail.instock, 'sold': productdetail.sold });
          } else {
            let updateSizeDetail = updateProductDetail.get(productdetail.size);
            updateSizeDetail.instock += productdetail.instock;
            updateSizeDetail.sold += productdetail.sold;
            updateProductDetail.set(productdetail.size, updateSizeDetail);
          }
        });
        totalProducts.set(product.producttype, updateProductDetail);
      }
        
    });
    
    console.log(totalProducts);

    return {
      'totalinstock': totalInStock,
      'totalsold': totalSold,
      'totalbrands': totalBrands,
      'totalproducts': totalProducts
    };
  }
}

export interface ProductStockDetail {
    instock: number;
    sold: number;
}

export interface LandingModel {
    totalinstock: number;
    totalsold: number;
    totalbrands: number;
    totalproducts: Map<string, Map<string | number, ProductStockDetail>>;  
}
namespace ProductApi {

    export interface ProductDetails {
        pdid: string;
        size: string;
        color: string;
        instock: number;
        sold: number;
    }


    export interface Product {
        uid: string;
        producttype: string;
        item: string;
        brand: string;
        images: string[];
        productdetails: ProductDetails[];
    }

}
export interface ProductSizeDetail {
    pdid?: string;
    size: number | string;
    color?: string;
    stock: number;
    sold?: number;
}

export interface ProductColorDetail {
    pdid: string[];
    color: string;
    empty: boolean;
}

export interface ProductsModel {
    uid: string;
    productname: string;
    brand: string;
    producttype: string;
    imagesrc: string;
    stocklevel?: string[];
    color?: ProductColorDetail[];
    stock: ProductSizeDetail[]; 
}
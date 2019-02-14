import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EifashionapiService {
  API_URL  =  'http://localhost:3000';
  constructor(private  httpClient:  HttpClient) { }

  getProducts() {
    return  this.httpClient.get(`${this.API_URL}/products`);
  }

  getProduct(uid: string) {
    return  this.httpClient.get(`${this.API_URL}/products?uid=${uid}`);
  }
}

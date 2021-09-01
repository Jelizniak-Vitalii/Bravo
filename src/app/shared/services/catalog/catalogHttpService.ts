import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface CatalogValue {
  productId: '',
  productCode: '',
  name: '',
  units: {
    unit: '',
    price: '',
  },
  availability: {
    inStock: false,
    outOfStock: false,
    discontinued: false
  }
}

@Injectable({
  providedIn: 'root'
})

export class CatalogHttpService {
  constructor(private http: HttpClient) {
  }

  getCatalogData( api: string ) {
    return this.http.get( api )
  }

  searchProducts(api: string, value: any) {
    return this.http.post(api, value);
  }

  deleteProduct( api: string , value: any) {
    return this.http.post( api , value )
  }

  sortProduct( api: string, value: any) {
    return this.http.post(api , value);
  }

  addProduct(api: string, value: any) {
    return this.http.post( api,value )
  }
}

import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('../assets/data.json')
    }

    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>('../assets/data.json', product)
    }
}

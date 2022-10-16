import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductosModel} from "../models/productos.model";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {
  }

  getProductos() {
    return this.http.get<ProductosModel[]>(environment.URL_PRODUCTOS);
  }
}

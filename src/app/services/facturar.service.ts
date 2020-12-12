import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacturarService {

  private url = 'http://localhost:4005/api/facturar'

  constructor(private httpClient: HttpClient) {
    console.log("Service facturar working");
  }

  facturar() {
    return this.httpClient.post(this.url, {})
  }
}

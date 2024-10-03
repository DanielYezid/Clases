import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {


  constructor(private httpClient: HttpClient) { }
  endpoint = "http://localhost:8080/api/markets";

  getAll() {
    return this.httpClient.get(this.endpoint);
  }


  create(traderName: string, type: string, price: number, sellFrom: string) {
    const headers = new HttpHeaders({
      'content-type': "application/x-www-form-urlencoded"

    });

    const body = new URLSearchParams();
    body.append("traderName",traderName);
    body.append("type", type);
    body.append("price",price.toString());
    body.append("sellForm", sellFrom);

    return this.httpClient.post(this.endpoint, body, {headers});
  }


  update(){

  }

  delete(id: any){
    
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

}

import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) { }
  endpoint = "http://localhost:8080/api/shops";

  getAll() {
    return this.httpClient.get(this.endpoint);
  }


  create(address: string, telephone: string) {
    const headers = new HttpHeaders({
      'content-type': "application/x-www-form-urlencoded"

    });

    const body = new URLSearchParams();
    body.append("address",address);
    body.append("telephone", telephone);

    return this.httpClient.post(this.endpoint, body, {headers});
  }


  update(){

  }

  delete(){
    
  }

}

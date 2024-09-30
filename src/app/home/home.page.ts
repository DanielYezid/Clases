//import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  shops: Array<any>= [
    {
      address: "c/ lujan",
      telephone: "928212121",
    },

    {
      address: "c/ perdomo",
      telephone: "928222222",
    },

    {
      address: "c/ camelia",
      telephone: "928481313",
    },
  ]

  constructor(private router: Router) {}

  goToShopList(){
    this.router.navigateByUrl("/shop-list")
  }

}

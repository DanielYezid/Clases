import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../services/market.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.page.html',
  styleUrls: ['./market-place.page.scss'],
})
export class MarketPlacePage implements OnInit {

  market: any = []

  constructor(private router: Router, private marketService: MarketService) {}

  goToHomePage(){
    this.router.navigateByUrl("/home")
  }

  ngOnInit() {
    this.getAllMarkets()
  }

  getAllMarkets(){
    this.marketService.getAll().subscribe(data => {
      console.log("Llegaron los datos"), 
      console.log(data)
      this.market = data; 
    })
  }

  goToHome(){
    this.router.navigateByUrl("/home")
  }

}

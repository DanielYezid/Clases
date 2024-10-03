import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToMarketPlace(){
    this.router.navigateByUrl("/market-place")
  }

  goToAddItem(){
    this.router.navigateByUrl("/add-product")
  }

}

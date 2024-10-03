import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarketService } from '../services/market.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  marketForm: FormGroup;

  constructor(private marketService: MarketService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.marketForm = this.formBuilder.group({
      traderName: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      sellFrom: ['', Validators.compose([Validators.required])],
    });

  }

  ngOnInit() {
  }

  createItem() {
    if (!this.marketForm.valid) {
      console.log("no es valido")
      return
    }
    const traderName = this.marketForm.value.traderName;
    const type = this.marketForm.value.type;
    const price = this.marketForm.value.price;
    const sellFrom = this.marketForm.value.sellFrom;

    this.marketService.create(traderName, type, price, sellFrom).subscribe((response) => {
      console.log("Se creo la tienda")
    });
  }

  getFormControl(field: string) {
    return this.marketForm.get(field);
  }

  goToHome(){
    this.router.navigateByUrl("/home")
  }

}

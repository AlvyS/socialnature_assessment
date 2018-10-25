import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Product';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})

export class OrderSuccessComponent implements OnInit {

  public products: Product[];
  public currentWindowWidth: number;

  constructor() { }

  ngOnInit() {
    this.calculateScreenSize();
    this.fetchSuggestedProducts();
  }

  // Dummy data
  fetchSuggestedProducts() {
    this.products = [
      {
        id: 1,
        name: `Muesli Cup`,
        manufacturer: `Bob's Red Mill`,
        imageUrl: `https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/nevxv8cn13rhhkiymxyn.png`,
      },
      {
        id: 2,
        name: `Organic Dal`,
        manufacturer: `Maya Kaimal`,
        imageUrl: `https://d2v6hcajofki8b.cloudfront.net/dras34d35/image/upload/c_fit,h_500,q_100,w_500/rmlvjdnflpijjmy5vwpa.png`,
      },
    ];
  }

  calculateScreenSize() {
    this.currentWindowWidth = window.innerWidth;
  }

  onResize() {
    this.calculateScreenSize();
  }

}

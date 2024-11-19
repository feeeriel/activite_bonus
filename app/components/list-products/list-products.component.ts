// list-products.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  search: string = '';
  listProducts: Product[] = [];
  shortList: Product[] = [];

  constructor() {}

  ngOnInit() {
    this.listProducts = [
      { id: 1, title: 'Cuisinière', image: 'assets/images/cuisiniere.jpg', description: '699 dt', promotion: false, quantity: 50, categoryId: 1 },
      { id: 2, title: 'Réfrigérateur', image: 'assets/images/refrigerateur.jpg', description: '1500 dt', promotion: false, quantity: 20, categoryId: 1 },
      { id: 3, title: 'Robot Pétrin', image: 'assets/images/robot.jpg', description: '430 dt', promotion: false, quantity: 150, categoryId: 2 },
      { id: 4, title: 'Fer à repasser', image: 'assets/images/fer.jpg', description: '130 dt', promotion: false, quantity: 100, categoryId: 2 },
      { id: 5, title: 'Oppo', image: 'assets/images/oppo.jpeg', description: '920 dt', promotion: false, quantity: 10, categoryId: 4 },
      { id: 6, title: 'TV Téléfunkun', image: 'assets/images/tv.jpg', description: '845 dt', promotion: false, quantity: 50, categoryId: 5 }
    ];
  }

  addToShortlist(product: Product) {
    this.shortList.push(product);
    console.log('Product added to shortlist:', product);
  }
}

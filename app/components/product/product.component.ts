import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  search: string = '';
  listProducts: Product[] = [];
  id!: number;

  constructor(private activated: ActivatedRoute) {}

  ngOnDestroy() {
    console.log('destroy component');
  }

  ngOnInit() {
    console.log('init component');

    // Liste des produits avec les attributs du modèle Product
    this.listProducts = [
      {
        id: 1,
        title: 'Réfrigérateur LG Inox',
        image: 'assets/images/product1.jpg',
        categoryId: 1,
        description: 'Réfrigérateur de haute qualité en inox',
        promotion: false,
        quantity: 10,
      },
      {
        id: 2,
        title: 'Réfrigérateur Samsung Blanc',
        image: 'assets/images/product3.jpeg',
        categoryId: 1,
        description: 'Réfrigérateur blanc Samsung avec technologie de refroidissement avancée',
        promotion: false,
        quantity: 10,
      },
      {
        id: 3,
        title: 'Lave-vaisselle Beko',
        image: 'assets/images/product4.jpeg',
        categoryId: 1,
        description: 'Lave-vaisselle Beko, économe en énergie',
        promotion: false,
        quantity: 10,
      },
      {
        id: 4,
        title: 'Oppo Smart Phone',
        image: 'assets/images/product5.jpeg',
        categoryId: 4,
        description: 'Smartphone Oppo avec écran de 6.5 pouces',
        promotion: false,
        quantity: 10,
      },
      {
        id: 5,
        title: 'Hachoir Moulinex',
        image: 'assets/images/product6.jpeg',
        categoryId: 2,
        description: 'Hachoir Moulinex, idéal pour une utilisation quotidienne',
        promotion: false,
        quantity: 10,
      },
      {
        id: 6,
        title: "TV 50'' LG",
        image: 'assets/images/product7.jpeg',
        categoryId: 5,
        description: 'Télévision LG 50 pouces avec résolution 4K',
        promotion: false,
        quantity: 10,
      },
    ];

    // Récupérer l'ID de la catégorie à partir des paramètres de l'URL
    this.id = this.activated.snapshot.params['id'];
    console.log('Snapshot method : ');
    console.log(this.activated.snapshot.params['id']);
    console.log('params :');
    this.activated.params.subscribe({
      next: (p) => console.log(p['id']),
    });
    console.log('paramMap');
    this.activated.paramMap.subscribe({
      next: (p) => console.log(p.get('id')),
    });

    // Filtrer les produits en fonction de la catégorie
    this.listProducts = this.listProducts.filter(
      (pr) => pr.categoryId == this.id
    );
  }

  // Méthode pour incrémenter le nombre de likes
  increment(product: Product) {
    product.quantity++; // Vous pouvez modifier ici selon ce que vous voulez incrémenter
  }

  // Méthode pour simuler un achat en réduisant la quantité
  buy(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
}

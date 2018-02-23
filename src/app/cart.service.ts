import { Injectable } from '@angular/core';
import { Product } from './shared/product.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CartService {

  products: any[] = [];
  cartTotal: any = 0;

  productsCompare: any[] = [];

  private productAddedSource = new Subject<any>();
  productAdded$ = this.productAddedSource.asObservable();

  private productAddedCompare = new Subject<any>();
  productAddedCompare$ = this.productAddedCompare.asObservable();

  constructor() { }

  addProductToCart(product) {
    let exists = false;
    const parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
    this.cartTotal += parsedPrice;

    this.products = this.products.map(_product => {
      if (_product.product.id === product.id) {
        _product.quantity++;
        exists = true;
      }
      return _product;
    });

    if (!exists) {
      product.parsedPrice = parsedPrice;
      this.products.push({
        product: product,
        quantity: 1,
      });
    }

    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }

  deleteProductFromCart(product) {
    this.products = this.products.filter(_product => {
      if (_product.product.id === product.id) {
        this.cartTotal -= _product.product.parsedPrice * _product.quantity;
        return false;
      }
      return true;
     });
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }

  addProductToCompare(product) {
    let exists = false;
    this.productsCompare = this.productsCompare.map(_product => {
      if (_product.product.id === product.id) {
        _product.quantity++;
        exists = true;
      }
      return _product;
    });

    if (!exists) {
      if (this.productsCompare.length < 3) {
        this.productsCompare.push({
          product: product,
          quantity: 1,
        });
      }
    }

    this.productAddedCompare.next({ products: this.productsCompare });
  }

  deleteProductFromCompare(product) {
    this.productsCompare = this.productsCompare.filter(_product => _product.product.id === product.id);
    this.productAddedSource.next({ products: this.productsCompare });
  }

  flushCart() {
    this.products = [];
    this.cartTotal = 0;
    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
  }
}

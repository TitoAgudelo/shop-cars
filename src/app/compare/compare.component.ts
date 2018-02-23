import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs/Subscription';

const OFFSET_HEIGHT: number = 170;
const PRODUCT_HEIGHT: number = 48;

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  products: any[] = [];
  numProducts: number = 0;
  animatePlop: boolean = false;
  animatePopout: boolean = false;
  expanded: boolean = false;
  expandedHeight: string;
  cartTotal: number = 0;

  changeDetectorRef: ChangeDetectorRef;

  constructor(private cartService: CartService, changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngOnInit() {
    this.expandedHeight = '0';
    this.cartService.productAddedCompare$.subscribe(data => {
      this.products = data.products;
      this.numProducts = data.products.reduce((acc, product) => {
        acc += product.quantity;
        return acc;
      }, 0);

      if (this.numProducts > 1) {
        this.animatePlop = true;
        setTimeout(() => {
          this.animatePlop = false;
        }, 160);
      } else if (this.numProducts === 1) {
        this.animatePopout = true;
        setTimeout(() => {
          this.animatePopout = false;
        }, 300);
      }
      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
      if (!this.products.length) {
        this.expanded = false;
      }
      this.expanded = true;
      this.changeDetectorRef.detectChanges();
    });
  }

  deleteProduct(product) {
    this.cartService.deleteProductFromCart(product);
  }

  onComapreClick() {
    this.expanded = !this.expanded;
  }

}

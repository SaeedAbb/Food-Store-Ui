import {Component} from '@angular/core';
import {CartService} from "../services/cart/cart.service";
import {Cart} from "../shared/moduls/cart";
import {CartItem} from "../shared/moduls/cartItem";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCard();
  }

  ngOnInit() {

  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCard();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCard();
  }

  setCard(): void {
    this.cart = this.cartService.getCart();
  }

}

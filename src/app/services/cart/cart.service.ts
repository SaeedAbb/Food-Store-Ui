import {Injectable} from '@angular/core';
import {Cart} from "../../shared/moduls/cart";
import {Food} from "../../shared/moduls/Food";
import {CartItem} from "../../shared/moduls/cartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodID: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodID);
  }

  changeQuantity(foodId: number, quantity: number) {
    const cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) {
      return
    }
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}

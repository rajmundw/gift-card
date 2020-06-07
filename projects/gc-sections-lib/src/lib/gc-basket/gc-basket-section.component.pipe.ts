import { PipeTransform, Pipe } from '@angular/core';
import { BasketModel } from 'gc-types-lib';

@Pipe({name: 'totalPrice'})
export class GcBasketTotalPricePipe implements PipeTransform {
  transform(selectedItems: Array<BasketModel>): string {
    const price: string = selectedItems.map(element => element.quantity * element.price).reduce((a, b) => a + b).toFixed(2);
    return  price + " " + selectedItems[0].currency;
  }
}

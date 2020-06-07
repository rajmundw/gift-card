import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import {cardsInBasketSelector, selectedItemsSelector, ChangeBasketContent} from 'gc-store-lib';
@Component({
  selector: 'gc-basket-section',
  templateUrl: './gc-basket-section.component.html',
  styleUrls: ['./gc-basket-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GcBasketSectionComponent {

  cardsInBasket$: Observable<any> = this.store.select(cardsInBasketSelector).pipe();

  private isAlive: boolean = true;
  private clickAction: boolean = false;
  hasElements: boolean = false;

  constructor(private store: Store<any>) { }

  public removeCardFromBasket(id: number): void {
    this.clickAction = true;

    this.store.select(selectedItemsSelector).pipe(
      takeWhile(_ => this.isAlive && this.clickAction),
      tap(selectedItems => {
        this.clickAction = false;
        if (selectedItems && selectedItems.find(selectedItem => selectedItem.id === id)) {
          selectedItems.find(selectedItem => selectedItem.id === id).quantity--;
          selectedItems = selectedItems.filter(selecteItem => selecteItem.quantity > 0);
          this.store.dispatch(ChangeBasketContent({selectedItems: [...selectedItems]}));
        }
      })
    ).subscribe();
  }
}

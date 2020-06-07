import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, takeWhile } from 'rxjs/operators';
import { LoadItemsAction, availableItemsSelector, ChangeBasketContent, selectedItemsSelector } from 'gc-store-lib';

@Component({
  selector: 'gc-products-section',
  templateUrl: './gc-products-section.component.html',
  styleUrls: ['./gc-products-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GcProductsSectionComponent implements OnInit {

  private isAlive: boolean = true;
  private clickAction: boolean = false;

  availableItems$: Observable<any> = this.store.select(availableItemsSelector).pipe(
  );

  constructor(private store: Store<any>) {
   }

  ngOnInit(): void  {
    this.store.dispatch(LoadItemsAction());
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  public addCardToBasket(id: number): void {
    this.clickAction = true;

    this.store.select(selectedItemsSelector).pipe(
      takeWhile(_ => this.isAlive && this.clickAction),
      tap(selectedItems => {
        this.clickAction = false;
        if (selectedItems && selectedItems.find(selectedItem => selectedItem.id === id)) {
          selectedItems.find(selectedItem => selectedItem.id === id).quantity ++;
          this.store.dispatch(ChangeBasketContent({selectedItems: [...selectedItems]}));
        } else {
          this.store.dispatch(ChangeBasketContent({selectedItems: [...selectedItems ? selectedItems : [] , {id: id, quantity: 1}]}));
        }
      })
    ).subscribe();
  }
}

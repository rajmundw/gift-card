import { Action, createReducer, on } from '@ngrx/store';
import { LoadItemsSuccessAction, ChangeBasketContent } from './items.actions';
import { ItemsState } from './items.state';


const reducer = createReducer(
  new ItemsState(),
    on( LoadItemsSuccessAction, (state, { availableItems }) => ({ ...state, availableItems })),
    on( ChangeBasketContent, (state, {selectedItems}) => ({...state, selectedItems}))
);
export function itemsReducer(state: ItemsState, action: Action) {
  return reducer(state, action);
}
